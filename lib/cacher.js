/**
 * Vue GitHub Buttons cacher.
 *
 * @class Cacher
 */
class Cacher {
	/**
	 * Cache name constant
	 *
	 * @readonly
	 * @static
	 *
	 * @memberOf Cacher
	 */
	static get CACHE_NAME() {
		return 'vue-github-buttons';
	}
	/**
	 * Check session storage API support.
	 *
	 * @static
	 * @returns {Boolean}
	 *
	 * @memberOf Cacher
	 */
	static hasSession() {
		return window.sessionStorage ? true : false;
	}
	/**
	 * Creates an instance of Cacher.
	 *
	 * @memberOf Cacher
	 */
	constructor(autoCommit = true) {
		this.autoCommit = autoCommit;
		this.cache = {
			repo: {},
			user: {}
		};

		if (this.exist()) {
			this.retrieve();
		} else {
			this.commit();
		}
	}
	/**
	 * Check cache existence in session storage.
	 *
	 * @returns {Boolean}
	 *
	 * @memberOf Cacher
	 */
	exist() {
		if (Cacher.hasSession()) {
			let cache = sessionStorage.getItem(Cacher.CACHE_NAME);
			return cache ? true : false;
		}
		return false;
	}
	/**
	 * Write cache data to session storage.
	 *
	 * @returns {Boolean} Commit result.
	 *
	 * @memberOf Cacher
	 */
	commit() {
		try {
			if (Cacher.hasSession()) {
				sessionStorage.setItem(Cacher.CACHE_NAME, JSON.stringify(this.cache));
			}
			return true;
		} catch (err) {
			return false;
		}
	}
	/**
	 * Retrieve cache data from session storage.
	 *
	 *
	 * @memberOf Cacher
	 */
	retrieve() {
		if (Cacher.hasSession()) {
			let cache = sessionStorage.getItem(Cacher.CACHE_NAME);
			if (cache) {
				this.cache = JSON.parse(cache);
			}
		}
	}
	/**
	 * Clear cache.
	 *
	 *
	 * @memberOf Cacher
	 */
	clear() {
		this.cache = {
			repo: {},
			user: {}
		};
		if (Cacher.hasSession()) {
			sessionStorage.removeItem(Cacher.CACHE_NAME);
		}
	}
	/**
	 * Get repository data from cache.
	 *
	 * @param {String} slug GitHub slug.
	 * @returns {Object}
	 *
	 * @memberOf Cacher
	 */
	getRepo(slug) {
		if ((typeof slug === 'string') && (this.cache.repo[slug])) {
			return this.cache.repo[slug];
		} else {
			return null;
		}
	}
	/**
	 * Set repository data to cache.
	 *
	 * @param {String} slug GitHub slug.
	 * @param {any} data Repository data.
	 *
	 * @memberOf Cacher
	 */
	setRepo(slug, data) {
		if ((typeof slug === 'string') && data) {
			this.cache.repo[slug] = data;
			if (this.autoCommit) {
				this.commit();
			}
		}
	}
	/**
	 * Get user data from cache.
	 *
	 * @param {String} username GitHub user's name.
	 * @returns {Object}
	 *
	 * @memberOf Cacher
	 */
	getUser(username) {
		if ((typeof username === 'string') && (this.cache.user[username])) {
			return this.cache.user[username];
		} else {
			return null;
		}
	}
	/**
	 * Set user data to cache.
	 *
	 * @param {String} username GitHub user's name.
	 * @param {Object} data User data.
	 *
	 * @memberOf Cacher
	 */
	setUser(username, data) {
		if ((typeof username === 'string') && data) {
			this.cache.user[username] = data;
			if (this.autoCommit) {
				this.commit();
			}
		}
	}
}

module.exports = Cacher;
