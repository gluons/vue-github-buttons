/**
 * Extrac Octicon SVG path from path tag (<path>)
 *
 * @param {String} pathTag Path tag.
 * @returns SVG path.
 */
function extractOcticonPath(pathTag) {
	// Use @Justineo's regex.
	return pathTag.match(/\bd="([^"]+)"/)[1];
}

module.exports = {
	extractOcticonPath
};
