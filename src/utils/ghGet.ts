import Cacher from '../lib/cacher';
import PathActionExecutor from '../lib/PathActionExecutor';
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
		const retrievalExecutor = new PathActionExecutor(path)
			.repo(slug => {
				retrievedData = cacher.getRepo(slug);
			})
			.user(username => {
				retrievedData = cacher.getUser(username);
			});
		// Caching
		const cachingExecutor = new PathActionExecutor(path)
			.repo((slug, data) => {
				cacher.setRepo(slug, data);
			})
			.user((username, data) => {
				cacher.setUser(username, data);
			});

		const cacherMiddleware = (data: any) => {
			cachingExecutor.execute(data);
		};

		retrievalExecutor.execute();

		if (retrievedData) {
			return retrievedData;
		} else {
			return await sendGhRequest(path, cacherMiddleware);
		}
	} else {
		return await sendGhRequest(path);
	}
}
