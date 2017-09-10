import Cacher from '../cacher';

/**
 * GET request from GitHub API.
 *
 * @param {String} path API request path.
 * @param {boolean} [useCache=true] Enable cache.
 * @returns {Promise} Promise of data.
 */
function ghGet(path, useCache = true) {
	let selector = fn => {
		let repoRegex = /^(\/repos\/)(.+)/;
		let userRegex = /^(\/users\/)(.+)/;
		if (repoRegex.test(path)) {
			return fn('repo', repoRegex);
		} else if (userRegex.test(path)) {
			return fn('user', userRegex);
		} else {
			return null;
		}
	};

	if (useCache) {
		let resultPromise = selector((type, regex) => {
			let cacher = new Cacher();
			let key = path.match(regex)[2];
			let data = type == 'repo' ? cacher.getRepo(key) : cacher.getUser(key);
			if (data) {
				return Promise.resolve(data);
			}
		});
		if (resultPromise) {
			return resultPromise; // Immediately return when cache found.
		}
	}

	/* global GH_ROOT_URL, GH_TOKEN */
	let requestUrl = GH_ROOT_URL + path + GH_TOKEN;

	let resultPromise = fetch(requestUrl, {
		method: 'GET',
		headers: {
			'Accept': 'application/vnd.github.v3+json'
		}
	}).then(res => {
		if (res.status == 200) {
			return res.json();
		} else {
			return Promise.reject(res.statusText);
		}
	});

	if (useCache) {
		return resultPromise.then(res => {
			selector((type, regex) => {
				let cacher = new Cacher();
				let key = path.match(regex)[2];
				if (type == 'repo') {
					cacher.setRepo(key, res);
				} else {
					cacher.setUser(key, res);
				}
			});
			return res;
		});
	} else {
		return resultPromise;
	}
}

export default ghGet;
