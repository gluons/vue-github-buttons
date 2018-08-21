const nvl = require('nvl');
const { resolve } = require('path');

const alias = require('./alias');

module.exports = {
	entry: resolve(__dirname, './src/index.js'),
	libraryName: 'VueGitHubButtons',
	fileName: 'vue-github-buttons',
	alias,
	define: {
		'GH_TOKEN': ''
	},
	dev: {
		entry: resolve(__dirname, './dev/index.js'),
		define: {
			'GH_TOKEN': nvl(process.env.GITHUB_DEV_TOKEN, '')
		},
		htmlTitle: 'Vue GitHub Buttons'
	}
};
