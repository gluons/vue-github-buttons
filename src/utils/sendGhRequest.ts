import { GH_ROOT_URL } from '../lib/constants';

const requestHeaders: Record<string, string> = {
	Accept: 'application/vnd.github.v3+json'
};

if (GH_TOKEN) {
	// tslint:disable-next-line:no-string-literal
	requestHeaders['Authorization'] = `token ${GH_TOKEN}`;
}

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
	if (path.charAt(0) !== '/') {
		path = `/${path}`;
	}

	const fullUrl = `${GH_ROOT_URL}${path}`;
	const res = await fetch(fullUrl, {
		method: 'GET',
		headers: requestHeaders,
		cache: 'no-store',
		redirect: 'follow'
	});

	if (res.ok) {
		const data = await res.json();
		middleware(data);

		return data;
	} else {
		let errorMsg: string = `${res.status}`;

		if (res.statusText) {
			errorMsg += ` - ${res.statusText}`;
		}

		throw new Error(`GitHub request error: ${errorMsg}`);
	}
}
