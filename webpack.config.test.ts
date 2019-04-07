import VueLoaderPlugin from 'vue-loader/lib/plugin';
import { Configuration, DefinePlugin } from 'webpack';

export default {
	mode: 'none',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					productionMode: false
				}
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					compilerOptions: {
						sourceMap: true
					},
					appendTsSuffixTo: [/\.vue$/]
				}
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					{ loader: 'css-loader', options: { sourceMap: true } }
				]
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					{
						loader: 'css-loader',
						options: { importLoaders: 1, sourceMap: true }
					},
					{ loader: 'sass-loader', options: { sourceMap: true } }
				]
			}
		]
	},
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		},
		extensions: ['.wasm', '.mjs', '.ts', '.js', '.json', '.vue']
	},
	plugins: [
		new VueLoaderPlugin(),
		new DefinePlugin({
			GH_TOKEN: JSON.stringify(''),
			IS_WEB_BUNDLE: JSON.stringify(false)
		})
	],
	devtool: 'eval-source-map',
	stats: false
} as Configuration;
