const { resolve } = require('path');

const defaultOptions = {
	css: true,
	useCache: true
};

const cssPath = 'vue-github-buttons/dist/vue-github-buttons.css';

/**
 * Vue GitHub buttons module for Nuxt.
 *
 * @param {{ css: boolean, useCache: boolean }} [options={ css: true, useCache: true }] Options
 */
module.exports = function nuxtVueGitHubButtons(options) {
	options = Object.assign({}, defaultOptions, options);

	if (options.css && !this.options.css.includes(cssPath)) {
		this.options.css.push(cssPath);
	}

	this.addPlugin({
		src: resolve(__dirname, './plugin.js'),
		options
	});
};
