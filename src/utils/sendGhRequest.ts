import axios from 'axios';

import { GH_ROOT_URL } from '../lib/constants';

const requestHeaders: Record<string, string> = {
	Accept: 'application/vnd.github.v3+json'
};

if (GH_TOKEN) {
	// tslint:disable-next-line:no-string-literal
	requestHeaders['Authorization'] = `token ${GH_TOKEN}`;
}

const instance = axios.create({
	baseURL: GH_ROOT_URL,
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
	const res = await instance.get(path);

	if (res.status === 200) {
		const data = res.data;
		middleware(data);

		return data;
	} else {
		throw new Error(`Error: ${res.statusText}`);
	}
}
