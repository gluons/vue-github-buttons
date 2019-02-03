const { resolve } = require('path');

const defaultOptions = {
	css: true,
	useCache: true
};

const pkg = require('../package.json');
const cssPath = 'vue-github-buttons/dist/vue-github-buttons.css';

/**
 * Vue GitHub buttons module for Nuxt.
 *
 * @export
 * @param {{ css: boolean, useCache: boolean }} [options={ css: true, useCache: true }] Options
 */
export default function nuxtVueGitHubButtons(
	options = { css: true, useCache: true }
) {
	options = Object.assign({}, defaultOptions, options);

	if (options.css && !this.options.css.includes(cssPath)) {
		this.options.css.push(cssPath);
	}

	this.addPlugin({
		src: resolve(__dirname, './plugin.js'),
		options
	});
}

nuxtVueGitHubButtons.meta = pkg;

export const meta = pkg;
