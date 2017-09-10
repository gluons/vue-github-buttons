/**
 * Get CSS loader rule.
 *
 * @param {number} [importLoaders=0] CSS loader's `importLoaders`.
 * @param {boolean} [minimize=false] CSS loader's `minimize`.
 * @returns Loader rule.
 */
function getCSSLoader(importLoaders = 0, minimize = false) {
	return {
		loader: 'css-loader',
		options: {
			minimize,
			sourceMap: true,
			importLoaders
		}
	};
}

module.exports = getCSSLoader;
