const path = require('path');

const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const banner = require('./banner');
const createStyleLoaders = require('./createStyleLoaders');
const defineVars = require('./defineVars');
const S = JSON.stringify; // Alias

/**
 * Get base webpack config.
 *
 * @param {boolean} [minimize=false] Enable minimization/minification.
 * @returns webpack config.
 */
function getBaseConfig(minimize = false) {
	return {
		entry: path.resolve(__dirname, '../src/index.js'),
		output: {
			path: path.resolve(__dirname, '../dist')
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
				'@': path.resolve(__dirname, '../src'),
				'vue$': 'vue/dist/vue.esm.js',
				'@lib': path.resolve(__dirname, '../lib'),
				'@rs': path.resolve(__dirname, '../resource')
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
			...(
				minimize
					?
					[
						new MinifyPlugin()
					]
					:
					[]
			),
			new webpack.BannerPlugin(banner)
		],
		devtool: 'source-map',
		stats: {
			modules: false
		}
	};
}

module.exports = getBaseConfig;
