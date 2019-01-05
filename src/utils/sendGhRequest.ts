import ky from 'ky';

import { GH_ROOT_URL } from '../lib/constants';

const requestHeaders = new Headers({
	Accept: 'application/vnd.github.v3+json'
});

if (GH_TOKEN) {
	requestHeaders.set('Authorization', `token ${GH_TOKEN}`);
}

const api = ky.extend({
	prefixUrl: GH_ROOT_URL,
	headers: requestHeaders
});

export type Middleware = (data: any) => void;

/**
 * Send GET request to GitHub API.
 *
 * @export
 * @param {string} path Request relative path
 * @param {Middleware} [middleware=() => {}] Middleware
 * @returns {Promise<any>} GitHub API data
 */
export default async function sendGhRequest(
	path: string,
	middleware: Middleware = () => {}
): Promise<any> {
	if (path.charAt(0) === '/') {
		path = path.substring(1);
	}

	const data = await api.get(path).json();

	middleware(data);

	return data;
}
