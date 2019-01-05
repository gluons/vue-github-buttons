import isRepoPath from './isRepoPath';
import { repo } from './pathRegex';

/**
 * Get a repo slug from GitHub API relative path.
 *
 * @export
 * @param {string} path GitHub API relative path
 * @returns {string} Repo slug
 */
export default function getRepoFromPath(path: string): string {
	return isRepoPath(path) ? path.match(repo)[2] : null;
}
