/**
 * Get SASS loader rule.
 *
 * @returns Loader rule.
 */
function getSASSLoader() {
	return {
		loader: 'sass-loader',
		options: {
			sourceMap: true
		}
	};
}

module.exports = getSASSLoader;
