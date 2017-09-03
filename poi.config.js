const isNil = require('lodash.isnil');

const token = process.env.GITHUB_DEV_TOKEN;

module.exports = {
	entry: './dev/index.js',
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
			]
		})
	],
	karma: {
		reporters: ['mocha', 'kjhtml'],
		browserConsoleLogOptions: {
			level: 'error'
		}
	}
};
