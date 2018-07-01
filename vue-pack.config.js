const { resolve } = require('path');
const alias = require('@gluons/vue-pack-alias-plugin').default;

const aliases = {
	'@': resolve(__dirname, './src'),
	'@lib': resolve(__dirname, './lib')
};

module.exports = {
	entry: resolve(__dirname, './src/index.js'),
	libraryName: 'VueGitHubButtons',
	fileName: 'vue-github-buttons',
	define: {
		'GH_TOKEN': JSON.stringify('')
	},
	plugins: [
		alias(aliases)
	]
};
