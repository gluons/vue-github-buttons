/**
 * Is value set?
 *
 * @export
 * @template T
 * @param {T} value A value to check
 * @returns {boolean}
 */
export default function isset<T>(value: T): boolean {
	if (typeof value === 'string' && value.length > 0) {
		return true;
	} else {
		return typeof value !== 'undefined' && value != null;
	}
}
