const ExtractTextPlugin = require('extract-text-webpack-plugin');

const getCSSLoader = require('./getCSSLoader');
const getPostCSSLoader = require('./getPostCSSLoader');
const getSASSLoader = require('./getSASSLoader');

const loaderGetters = {
	css: getCSSLoader,
	postcss: getPostCSSLoader,
	scss: getSASSLoader
};

/**
 * Create style loader rules. (With text extraction)
 *
 * @param {string[]} loaderNames Loader names.
 * @param {boolean} [minimize=false] CSS loader's `minimize`.
 * @returns Loader rules.
 */
function createStyleLoaders(loaderNames, minimize = false) {
	if (Array.isArray(loaderNames) && (loaderNames.length > 0)) {
		let loaderRules = loaderNames.map(loaderName => {
			if (!loaderGetters[loaderName]) {
				return null;
			}

			if (loaderName.toLowerCase() == 'css') {
				return loaderGetters[loaderName](loaderNames.length - 1, minimize);
			} else {
				return loaderGetters[loaderName]();
			}
		});

		return ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: loaderRules
		});
	} else {
		return [];
	}
}

module.exports = createStyleLoaders;
