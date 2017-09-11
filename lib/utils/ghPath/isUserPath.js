import { user } from './pathRegex';

/**
 * Check if user path or not.
 *
 * @export
 * @param {string} path GitHub API relative path.
 * @returns {boolean} Checking result.
 */
export default function isUserPath(path) {
	return user.test(path);
}
