const webpackConfig = require('./webpack.config.test');

module.exports = function (config) {
	config.set({
		frameworks: ['mocha'],
		files: [
			'test/**/*.test.js'
		],
		preprocessors: {
			'**/*.test.js': ['webpack', 'sourcemap']
		},
		webpack: webpackConfig,
		webpackMiddleware: {
			stats: 'none'
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
