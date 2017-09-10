/**
 * Send GET request to GitHub API.
 *
 * @export
 * @param {string} path Request relative path.
 * @param {function} [middleware=() => {}] Middleware.
 * @returns GitHub API data.
 */
export default function sendGhRequest(path, middleware = () => {}) {
	/* global GH_ROOT_URL, GH_TOKEN */
	let requestUrl = GH_ROOT_URL + path + GH_TOKEN;

	return fetch(requestUrl, {
		method: 'GET',
		headers: {
			'Accept': 'application/vnd.github.v3+json'
		}
	})
		.then(res => {
			if (res.status == 200) {
				return res.json()
					.then(data => {
						middleware(data);

						return data;
					});
			} else {
				throw new Error(`Error: ${res.statusText}`);
			}
		});
}
