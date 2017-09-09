const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

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
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							{
								loader: 'css-loader',
								options: {
									minimize,
									sourceMap: true,
									importLoaders: 1
								}
							},
							{
								loader: 'postcss-loader',
								options: {
									sourceMap: true
								}
							}
						]
					})
				},
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							{
								loader: 'css-loader',
								options: {
									minimize,
									sourceMap: true,
									importLoaders: 2
								}
							},
							{
								loader: 'postcss-loader',
								options: {
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}
						]
					})
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
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify('production')
				},
				'GH_ROOT_URL': JSON.stringify('https://api.github.com'),
				'GH_TOKEN': JSON.stringify('')
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
