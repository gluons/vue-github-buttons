import Cacher from '../cacher';
import sendGhRequest from './sendGhRequest';
import { PathActionDeterminer } from './ghPath';

/**
 * Send GET request from GitHub API.
 *
 * @export
 * @param {string} path GitHub API request path.
 * @param {boolean} [useCache=true] Enable caching.
 * @returns {Promise} Promise of data.
 */
export default function ghGet(path, useCache = true) {
	if (useCache) {
		let cacher = new Cacher();
		let retrievedData = null;

		// Retrieval
		let retrievalDeterminer = new PathActionDeterminer(path)
			.repo(slug => {
				retrievedData = cacher.getRepo(slug);
			})
			.user(username => {
				retrievedData = cacher.getUser(username);
			});
		// Caching
		let cachingDeterminer = new PathActionDeterminer(path)
			.repo((slug, data) => {
				cacher.setRepo(slug, data);
			})
			.user((username, data) => {
				cacher.setUser(username, data);
			});
		let cacherMiddleware = data => {
			cachingDeterminer.determine(data);
		};

		retrievalDeterminer.determine();

		if (retrievedData) {
			return Promise.resolve(retrievedData);
		} else {
			return sendGhRequest(path, cacherMiddleware);
		}
	} else {
		return sendGhRequest(path);
	}
}
