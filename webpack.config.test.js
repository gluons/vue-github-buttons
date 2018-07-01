const { resolve } = require('path');
const nvl = require('nvl');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

const token = nvl(process.env.GITHUB_DEV_TOKEN, '');

module.exports = {
	mode: 'none',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.pug$/,
				oneOf: [
					{
						resourceQuery: /^\?vue/,
						use: 'pug-plain-loader'
					},
					{
						use: 'pug-loader'
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.wasm', '.mjs', '.js', '.json', '.vue'],
		alias: require('./alias')
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			'GH_TOKEN': JSON.stringify(token)
		})
	],
	stats: 'none',
	devtool: 'eval-source-map'
};
