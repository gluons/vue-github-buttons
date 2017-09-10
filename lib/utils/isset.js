/**
 * Is value set?
 *
 * @param {any} value A value to check.
 * @returns {Boolean} Check result.
 */
function isset(value) {
	if ((typeof value === 'string') && (value.length > 0)) {
		return true;
	} else {
		return (typeof value !== 'undefined') && (value != null);
	}
}

export default isset;
