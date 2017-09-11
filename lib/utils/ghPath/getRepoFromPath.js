import { repo } from './pathRegex';
import isRepoPath from './isRepoPath';

/**
 * Get a repo slug from GitHub API relative path.
 *
 * @export
 * @param {string} path GitHub API relative path
 * @returns {string} Repo slug.
 */
export default function getRepoFromPath(path) {
	return isRepoPath(path) ? path.match(repo)[2] : null;
}
