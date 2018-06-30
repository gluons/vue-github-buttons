/* global GH_TOKEN */

import axios from 'axios';

import { GH_ROOT_URL } from '../constants';

let requestHeaders = {
	'Accept': 'application/vnd.github.v3+json'
};
if (GH_TOKEN) {
	requestHeaders['Authorization'] = `token ${GH_TOKEN}`;
}

const instance = axios.create({
	baseURL: GH_ROOT_URL,
	headers: requestHeaders
});

/**
 * Send GET request to GitHub API.
 *
 * @export
 * @param {string} path Request relative path.
 * @param {function} [middleware=() => {}] Middleware.
 * @returns GitHub API data.
 */
export default function sendGhRequest(path, middleware = () => {}) {
	return instance.get(path)
		.then(res => {
			if (res.status == 200) {
				let data = res.data;
				middleware(data);

				return data;
			} else {
				throw new Error(`Error: ${res.statusText}`);
			}
		});
}
