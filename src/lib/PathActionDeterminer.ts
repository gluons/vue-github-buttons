import getRepoFromPath from '../utils/ghPath/getRepoFromPath';
import getUserFromPath from '../utils/ghPath/getUserFromPath';
import isRepoPath from '../utils/ghPath/isRepoPath';
import isUserPath from '../utils/ghPath/isUserPath';

export type RepoAction = (slug: string, data?: any) => void;
export type UserAction = (username: string, data?: any) => void;

/**
 * Path action determiner.
 *
 * @export
 * @class PathActionDeterminer
 */
export default class PathActionDeterminer {
	private path: string;
	private repoAction: RepoAction;
	private userAction: UserAction;

	/**
	 * Creates an instance of PathActionDeterminer.
	 *
	 * @param {string} path GitHub API relative path
	 * @memberof PathActionDeterminer
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
	 * @memberof PathActionDeterminer
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
	 * @memberof PathActionDeterminer
	 */
	user(action: UserAction): this {
		this.userAction = action;

		return this;
	}
	/**
	 * Clear actions.
	 *
	 * @memberof PathActionDeterminer
	 */
	clear(): void {
		this.repoAction = () => {};
		this.userAction = () => {};
	}
	/**
	 * Determine an action to call.
	 *
	 * @param {*} [payload] Payload
	 * @memberof PathActionDeterminer
	 */
	determine(payload?: any): void {
		const { path, repoAction, userAction } = this;

		if (isRepoPath(path)) {
			repoAction(getRepoFromPath(path), payload);
		} else if (isUserPath(path)) {
			userAction(getUserFromPath(path), payload);
		}
	}
}
