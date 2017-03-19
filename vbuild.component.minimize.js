module.exports = {
	entry: 'src/index.js',
	// then user can access `window.VueGitHubButtons` in browser as well
	moduleName: 'VueGitHubButtons',
	html: false,
	minimize: true,
	sourceMap: false,
	filename: {
		js: 'vue-github-buttons.min.js',
		css: 'vue-github-buttons.min.css'
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
