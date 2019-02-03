type Cache = {
	repo: Record<string, any>;
	user: Record<string, any>;
};

/**
 * Vue GitHub Buttons cacher.
 *
 * @export
 * @class Cacher
 */
export default class Cacher {
	/**
	 * Cache name constant
	 *
	 * @readonly
	 * @static
	 *
	 * @memberOf Cacher
	 */
	static get CACHE_NAME(): string {
		return 'vue-github-buttons';
	}
	/**
	 * Check session storage API support.
	 *
	 * @static
	 * @returns {boolean}
	 *
	 * @memberOf Cacher
	 */
	static supportSession(): boolean {
		return (typeof window !== 'undefined') && window.sessionStorage ? true : false;
	}

	/**
	 * Automatically commit cache to session storage.
	 *
	 * @private
	 * @type {boolean}
	 * @memberof Cacher
	 */
	private autoCommit: boolean;
	/**
	 * Cache
	 *
	 * @private
	 * @type {Cache}
	 * @memberof Cacher
	 */
	private cache: Cache = {
		repo: {},
		user: {}
	};

	/**
	 * Creates an instance of `Cacher`.
	 *
	 * @param {boolean} [autoCommit=true] Automatically commit cache to session storage
	 * @memberof Cacher
	 */
	constructor(autoCommit: boolean = true) {
		this.autoCommit = autoCommit;

		if (this.exist()) {
			this.retrieve();
		} else {
			this.commit();
		}
	}
	/**
	 * Check cache existence in session storage.
	 *
	 * @returns {boolean}
	 *
	 * @memberOf Cacher
	 */
	exist(): boolean {
		if (Cacher.supportSession()) {
			const cache = sessionStorage.getItem(Cacher.CACHE_NAME);
			return cache ? true : false;
		}
		return false;
	}
	/**
	 * Write cache data to session storage.
	 *
	 * @returns {boolean} Commit result.
	 *
	 * @memberOf Cacher
	 */
	commit(): boolean {
		try {
			if (Cacher.supportSession()) {
				sessionStorage.setItem(
					Cacher.CACHE_NAME,
					JSON.stringify(this.cache)
				);
			}

			return true;
		} catch (_) {
			return false;
		}
	}
	/**
	 * Retrieve cache data from session storage.
	 *
	 *
	 * @memberOf Cacher
	 */
	retrieve(): void {
		if (Cacher.supportSession()) {
			const cache = sessionStorage.getItem(Cacher.CACHE_NAME);

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
		if (Cacher.supportSession()) {
			sessionStorage.removeItem(Cacher.CACHE_NAME);
		}
	}
	/**
	 * Get repository data from cache.
	 *
	 * @param {string} slug GitHub slug.
	 * @returns {any}
	 *
	 * @memberOf Cacher
	 */
	getRepo(slug: string): any {
		if (typeof slug === 'string' && this.cache.repo[slug]) {
			return this.cache.repo[slug];
		} else {
			return null;
		}
	}
	/**
	 * Set repository data to cache.
	 *
	 * @param {string} slug GitHub slug.
	 * @param {any} data Repository data.
	 *
	 * @memberOf Cacher
	 */
	setRepo(slug: string, data: any): void {
		if (typeof slug === 'string' && data) {
			this.cache.repo[slug] = data;

			if (this.autoCommit) {
				this.commit();
			}
		}
	}
	/**
	 * Get user data from cache.
	 *
	 * @param {string} username GitHub user's name.
	 * @returns {any}
	 *
	 * @memberOf Cacher
	 */
	getUser(username: string): any {
		if (typeof username === 'string' && this.cache.user[username]) {
			return this.cache.user[username];
		} else {
			return null;
		}
	}
	/**
	 * Set user data to cache.
	 *
	 * @param {string} username GitHub user's name.
	 * @param {any} data User data.
	 *
	 * @memberOf Cacher
	 */
	setUser(username: string, data: any): void {
		if (typeof username === 'string' && data) {
			this.cache.user[username] = data;

			if (this.autoCommit) {
				this.commit();
			}
		}
	}
}
