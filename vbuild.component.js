module.exports = {
	entry: 'src/index.js',
	// then user can access `window.VueGitHubButtons` in browser as well
	moduleName: 'VueGitHubButtons',
	html: false,
	minimize: false,
	sourceMap: false,
	filename: {
		js: 'vue-github-buttons.js',
		css: 'vue-github-buttons.css'
	},
	define: {
		GH_ROOT_URL: JSON.stringify('https://api.github.com'),
		GH_TOKEN: JSON.stringify('')
	},
	// this will not copy ./static/** to ./dist/**
	copy: false,
	eslintConfig: {
		configFile: './.eslintrc.json'
	}
};
