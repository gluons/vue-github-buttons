import getRepoFromPath from '../utils/ghPath/getRepoFromPath';
import getUserFromPath from '../utils/ghPath/getUserFromPath';
import isRepoPath from '../utils/ghPath/isRepoPath';
import isUserPath from '../utils/ghPath/isUserPath';

export type RepoAction = (slug: string, data?: any) => void;
export type UserAction = (username: string, data?: any) => void;

/**
 * Path action executor.
 *
 * @export
 * @class PathActionExecutor
 */
export default class PathActionExecutor {
	private path: string;
	private repoAction: RepoAction;
	private userAction: UserAction;

	/**
	 * Creates an instance of `PathActionExecutor`.
	 *
	 * @param {string} path GitHub API relative path
	 * @memberof PathActionExecutor
	 */
	constructor(path: string) {
		this.path = path;
		this.clear();
	}
	/**
	 * Define repo action.
	 *
	 * @param {RepoAction} action An action
	 * @returns {this}
	 * @memberof PathActionExecutor
	 */
	repo(action: RepoAction): this {
		this.repoAction = action;

		return this;
	}
	/**
	 * Define user action.
	 *
	 * @param {UserAction} action An action
	 * @returns {this}
	 * @memberof PathActionExecutor
	 */
	user(action: UserAction): this {
		this.userAction = action;

		return this;
	}
	/**
	 * Clear actions.
	 *
	 * @memberof PathActionExecutor
	 */
	clear(): void {
		this.repoAction = () => {};
		this.userAction = () => {};
	}
	/**
	 * Execute an appropriate action.
	 *
	 * @param {any} [payload] Payload
	 * @memberof PathActionExecutor
	 */
	execute(payload?: any): void {
		const { path, repoAction, userAction } = this;

		if (isRepoPath(path)) {
			repoAction(getRepoFromPath(path), payload);
		} else if (isUserPath(path)) {
			userAction(getUserFromPath(path), payload);
		}
	}
}
