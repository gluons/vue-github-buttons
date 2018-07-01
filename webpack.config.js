const { resolve } = require('path');
const nvl = require('nvl');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');

const token = nvl(process.env.GITHUB_DEV_TOKEN, '');

const htmlOptions = {
	title: 'Vue GitHub Buttons',
	template: resolve(__dirname, './index.pug')
};

module.exports = {
	mode: 'development',
	entry: resolve(__dirname, './dev/index.js'),
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
		alias: {
			'@': resolve(__dirname, './src'),
			'@lib': resolve(__dirname, './lib')
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin(htmlOptions),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'GH_TOKEN': JSON.stringify(token)
		}),
		new WebpackBar()
	],
	stats: 'none',
	devServer: {
		hot: true,
		open: true,
		stats: 'none'
	},
	devtool: 'eval-source-map'
};
