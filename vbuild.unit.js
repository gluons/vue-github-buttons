const fs = require('fs');
const path = require('path');
const karma = require('vbuild-karma');

module.exports = () => {
	let ghToken = fs.readFileSync(path.resolve(__dirname, './.gh-token'), 'utf8');

	return {
		// in test we don't need to split vendor code and minimize it
		vendor: false,
		minimize: false,
		sourceMap: false,
		define: {
			GH_ROOT_URL: JSON.stringify('https://api.github.com'),
			GH_TOKEN: JSON.stringify(`?access_token=${ghToken}`)
		},
		// run custom build process
		run(webpackConfig) {
			karma(webpackConfig);
		}
	};
};
