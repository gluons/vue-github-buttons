import getRepoFromPath from './getRepoFromPath';
import getUserFromPath from './getUserFromPath';
import isRepoPath from './isRepoPath';
import isUserPath from './isUserPath';

/**
 * Path action determiner.
 *
 * @export
 * @class PathActionDeterminer
 */
export default class PathActionDeterminer {
	/**
	 * Creates an instance of ActionMap.
	 * @param {string} path GitHub API relative path.
	 * @memberof PathActionDeterminer
	 */
	constructor(path) {
		this.path = path;
		this.clear();
	}
	/**
	 * Call repo action.
	 *
	 * @param {function} action An action.
	 * @returns Self instance.
	 * @memberof PathActionDeterminer
	 */
	repo(action) {
		this.repoAction = action;

		return this;
	}
	/**
	 * Call user action
	 *
	 * @param {function} action An action.
	 * @returns Self instance.
	 * @memberof PathActionDeterminer
	 */
	user(action) {
		this.userAction = action;

		return this;
	}
	/**
	 * Clear action.
	 *
	 * @memberof PathActionDeterminer
	 */
	clear() {
		this.repoAction = () => {};
		this.userAction = () => {};
	}
	/**
	 * Determine an action to call.
	 *
	 * @param {any} payload Payload.
	 * @memberof PathActionDeterminer
	 */
	determine(payload) {
		let path = this.path;
		if (isRepoPath(path)) {
			this.repoAction(getRepoFromPath(path), payload);
		} else if (isUserPath(path)) {
			this.userAction(getUserFromPath(path), payload);
		}
	}
}
