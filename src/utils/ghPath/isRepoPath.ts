import { repo } from './pathRegex';

/**
 * Check if repo path or not.
 *
 * @export
 * @param {string} path GitHub API relative path
 * @returns {boolean}
 */
export default function isRepoPath(path: string): boolean {
	return repo.test(path);
}
