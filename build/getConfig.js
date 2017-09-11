const ExtractTextPlugin = require('extract-text-webpack-plugin');

const getBaseConfig = require('./getBaseConfig');

const libraryName = 'VueGitHubButtons';
const fileName = 'vue-github-buttons';

/**
 * Get webpack config.
 *
 * @param {string} [type='web'] Output type.
 * @param {boolean} [minimize=false] Enable minimization/minification.
 * @returns webpack config.
 */
function getConfig(type = 'web', minimize = false) {
	let config = getBaseConfig(minimize);
	let suffix = minimize ? '.min' : '';

	switch (type) {
		case 'common':
			config.output.libraryExport = 'default';
			config.output.filename = `${fileName}${suffix}.common.js`;
			break;
		case 'esm':
			config.output.filename = `${fileName}${suffix}.esm.js`;
			break;
		case 'web':
			config.output.library = libraryName;
			config.output.libraryTarget = 'this';
			config.output.filename = `${fileName}${suffix}.js`;
			break;
		default:
			config = {};
			break;
	}

	if ((type == 'common') || (type == 'esm')) {
		config.target = 'node';
		config.output.libraryTarget = 'commonjs2';
		config.externals = {
			'axios': 'axios',
			'format-thousands': 'format-thousands'
		};
	}

	config.plugins.push(new ExtractTextPlugin(`${fileName}${suffix}.css`));

	return config;
}

module.exports = getConfig;
