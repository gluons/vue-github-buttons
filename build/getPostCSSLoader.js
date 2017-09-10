/**
 * Get PostCSS loader rule.
 *
 * @returns Loader rule.
 */
function getPostCSSLoader() {
	return {
		loader: 'postcss-loader',
		options: {
			sourceMap: true
		}
	};
}

module.exports = getPostCSSLoader;
