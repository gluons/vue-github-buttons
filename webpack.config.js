const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const createStyleLoaders = require('./build/createStyleLoaders');
const defineVars = require('./build/defineVars');
const S = JSON.stringify; // Alias

const MODULE_NAME = 'vue-github-buttons';

/**
 * Get webpack config.
 *
 * @param {boolean} [esm=false] Output as ES module.
 * @param {boolean} [minimize=false] Enable minimization and minification.
 * @returns {webpack.Configuration} webpack config.
 */
function getConfig(esm = false, minimize = false) {
	let jsSuffix = '';
	let cssSuffix = '';
	if (esm) {
		jsSuffix += '.esm';
	}
	if (minimize) {
		jsSuffix += '.min';
		cssSuffix += '.min';
	}

	return {
		entry: path.resolve(__dirname, './src/index.js'),
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: `${MODULE_NAME}${jsSuffix}.js`,
			libraryTarget: 'umd',
			libraryExport: !esm ? 'default' : void 0,
			library: 'VueGitHubButtons',
			umdNamedDefine: true
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						extractCSS: true
					}
				},
				{
					test: /\.css$/,
					use: createStyleLoaders(['css', 'postcss'], minimize)
				},
				{
					test: /\.scss$/,
					use: createStyleLoaders(['css', 'postcss', 'scss'], minimize)
				},
				{
					test: /\.vue.svg$/,
					loader: 'svg-to-component-loader',
					options: {
						type: 'vue'
					}
				}
			]
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'vue$': 'vue/dist/vue.esm.js',
				'@lib': path.resolve(__dirname, './lib'),
				'@rs': path.resolve(__dirname, './resource')
			}
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': S('production')
				},
				'GH_ROOT_URL': S(defineVars['GH_ROOT_URL']),
				'GH_TOKEN': S(defineVars['GH_TOKEN'])
			}),
			new ExtractTextPlugin(`${MODULE_NAME}${cssSuffix}.css`),
			...(
				minimize
					?
					[
						new MinifyPlugin()
					]
					:
					[]
			)
		],
		devtool: 'source-map',
		stats: {
			modules: false
		}
	};
}

module.exports = [
	getConfig(),
	getConfig(true),
	getConfig(false, true),
	getConfig(true, true)
];
