const webpack = require('./webpack.config.test');

module.exports = function(config) {
	config.set({
		frameworks: ['mocha', 'chai'],
		files: ['test/*.test.ts'],
		preprocessors: {
			'**/*.test.ts': ['webpack', 'sourcemap']
		},
		webpack,
		webpackMiddleware: {
			stats: false
		},
		reporters: ['spec'],
		client: {
			mocha: {
				reporter: 'html'
			}
		},
		browsers: ['Firefox'],
		singleRun: !!process.env.CI
	});
};
