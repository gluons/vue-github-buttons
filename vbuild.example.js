// this will copy ./static/** to ./dist-example/**
const fs = require('fs');
const path = require('path');

module.exports = () => {
	let ghToken = fs.readFileSync(path.resolve(__dirname, './.gh-token'), 'utf8');

	return {
		entry: 'example/index.js',
		dist: 'dist-example',
		html: {
			title: 'Vue GitHub Buttons'
		},
		define: {
			GH_ROOT_URL: JSON.stringify('https://api.github.com'),
			GH_TOKEN: JSON.stringify(`?access_token=${ghToken}`)
		},
		eslintConfig: {
			configFile: './.eslintrc.json'
		}
	};
};
