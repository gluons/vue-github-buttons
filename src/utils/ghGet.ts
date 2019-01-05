import Cacher from '../lib/cacher';
import PathActionDeterminer from '../lib/PathActionDeterminer';
import sendGhRequest from './sendGhRequest';

/**
 * Send GET request from GitHub API.
 *
 * @export
 * @param {string} path GitHub API request path
 * @param {boolean} [useCache=true] Enable caching
 * @returns {Promise<any>}
 */
export default async function ghGet(
	path: string,
	useCache: boolean = true
): Promise<any> {
	if (useCache) {
		const cacher = new Cacher();
		let retrievedData: any = null;

		// Retrieval
		const retrievalDeterminer = new PathActionDeterminer(path)
			.repo(slug => {
				retrievedData = cacher.getRepo(slug);
			})
			.user(username => {
				retrievedData = cacher.getUser(username);
			});
		// Caching
		const cachingDeterminer = new PathActionDeterminer(path)
			.repo((slug, data) => {
				cacher.setRepo(slug, data);
			})
			.user((username, data) => {
				cacher.setUser(username, data);
			});
		const cacherMiddleware = (data: any) => {
			cachingDeterminer.determine(data);
		};

		retrievalDeterminer.determine();

		if (retrievedData) {
			return retrievedData;
		} else {
			return await sendGhRequest(path, cacherMiddleware);
		}
	} else {
		return await sendGhRequest(path);
	}
}
