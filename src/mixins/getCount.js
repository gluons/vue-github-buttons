import { ghGet } from '@lib/utils';

export default {
	methods: {
		/**
		 * Get button count from GitHub API.
		 *
		 * @param {string} path Request path.
		 * @param {string} key The property of response that contain count result.
		 * @param {boolean} [useCache=true] Enable cache.
		 * @returns
		 */
		async getCount(path, key, useCache = true) {
			try {
				let res = await ghGet(path, useCache);
				return parseInt(res[key]);
			} catch (e) {
				/*
				 * Do not show count number when error.
				 * Set it to -1 to hide count number.
				 */
				return -1;
			}
		}
	}
};
