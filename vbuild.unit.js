const karma = require('vbuild-karma');

module.exports = {
	// in test we don't need to split vendor code and minimize it
	vendor: false,
	minimize: false,
	sourceMap: false,
	define: {
		GH_ROOT_URL: JSON.stringify('https://api.github.com'),
		GH_TOKEN: JSON.stringify('')
	},
	// run custom build process
	run(webpackConfig) {
		karma(webpackConfig);
	}
};
