const { resolve } = require('path');
const alias = require('@gluons/vue-pack-alias-plugin').default;

module.exports = {
	entry: resolve(__dirname, './src/index.js'),
	libraryName: 'VueGitHubButtons',
	fileName: 'vue-github-buttons',
	define: {
		'GH_TOKEN': ''
	},
	plugins: [
		alias(require('./alias'))
	]
};
