import { repo } from './pathRegex';

/**
 * Check if repo path or not.
 *
 * @export
 * @param {string} path GitHub API relative path.
 * @returns {boolean} Checking result.
 */
export default function isRepoPath(path) {
	return repo.test(path);
}
