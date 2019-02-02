import { user } from './pathRegex';

/**
 * Check if user path or not.
 *
 * @export
 * @param {string} path GitHub API relative path
 * @returns {boolean}
 */
export default function isUserPath(path: string): boolean {
	return user.test(path);
}
