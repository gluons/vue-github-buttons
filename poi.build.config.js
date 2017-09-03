module.exports = {
	entry: './src/index.js',
	filename: {
		js: 'vue-github-buttons.js',
		css: 'vue-github-buttons.css'
	},
	extendWebpack(config) {
		config.externals({
			'es6-promise': {
				root: 'Promise',
				commonjs: 'es6-promise',
				commonjs2: 'es6-promise'
			},
			'unfetch': {
				root: 'fetch',
				commonjs: 'unfetch',
				commonjs2: 'unfetch'
			},
			'unfetch/polyfill': 'unfetch/polyfill'
		});
	},
	homepage: null,
	html: false,
	removeDist: true
};
