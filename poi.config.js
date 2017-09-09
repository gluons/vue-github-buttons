const isNil = require('lodash.isnil');

const token = process.env.GITHUB_DEV_TOKEN;

module.exports = {
	entry: './dev/index.js',
	extendWebpack(config) {
		config.module
			// Remove Poi's default loader for SVG
			.rules.delete('svg').end()
			// Use SVG to component loader instead
			.rule('svg-vue')
			.test(/\.vue.svg$/)
			.use('svg-to-component')
			.loader('svg-to-component-loader')
			.options({
				type: 'vue'
			});
		config
			.performance.hints(false);
	},
	vendor: false,
	html: {
		title: 'Vue GitHub Buttons'
	},
	define: {
		'GH_ROOT_URL': 'https://api.github.com',
		'GH_TOKEN': !isNil(token) ? `?access_token=${token}` : ''
	},
	presets: [
		require('poi-preset-karma')({
			frameworks: ['jasmine'],
			browsers: [
				process.env.CI ? 'Firefox' : 'FirefoxDeveloper' // Use Firefox Developer Edition on local
			],
			extendWebpack(config) {
				config
					.stats('errors-only')
					.performance.hints(false);
			}
		})
	],
	karma: {
		reporters: ['mocha', 'kjhtml'],
		browserConsoleLogOptions: {
			level: 'error',
			terminal: false
		}
	}
};
