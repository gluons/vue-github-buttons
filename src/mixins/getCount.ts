import { Component, Vue } from 'vue-property-decorator';

import { ghGet } from '../utils';

@Component
export default class GetCountMixin extends Vue {
	/**
	 * Get button count via GitHub API.
	 *
	 * @param {string} path Request path
	 * @param {string} key The property of response that contain count result
	 * @param {boolean} [useCache=true] Enable caching
	 * @returns {Promise<number>}
	 * @memberof GetCountMixin
	 */
	async getCount(
		path: string,
		key: string,
		useCache: boolean = true
	): Promise<number> {
		try {
			const res = await ghGet(path, useCache);

			return parseInt(res[key], 10);
		} catch (err) {
			console.error(err);

			/*
			 * Do not show count number when error.
			 * Set it to -1 to hide count number.
			 */
			return -1;
		}
	}
}
