import isUserPath from './isUserPath';
import { user } from './pathRegex';

/**
 * Get a user name from GitHub API relative path.
 *
 * @export
 * @param {string} path GitHub API relative path
 * @returns {string} User name
 */
export default function getUserFromPath(path: string): string {
	return isUserPath(path) ? path.match(user)[2] : null;
}
