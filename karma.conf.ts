import { Config } from 'karma';
import webpack from './webpack.config.test';

declare module 'karma' {
	interface ClientOptions {
		mocha: any;
	}
}

export default (config: Config) => {
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
		browsers: ['FirefoxHeadless'],
		singleRun: !!process.env.CI
	});
};
