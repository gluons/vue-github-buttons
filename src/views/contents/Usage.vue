<template lang="pug">
#usage
	h2 Usage
	highlight-code(lang='javascript')
		include ../usage-codes/main.js
	highlight-code(lang='vue')
		include:escape-html ../usage-codes/component.vue
	hr.gap
	h2 Using with #[blank-link(url='https://nuxtjs.org/') Nuxt]
	p.with-code Add #[highlight-code(inline) vue-github-buttons/nuxt] to #[highlight-code(inline) modules] in #[strong nuxt.config.js].
	highlight-code(lang='js').
		module.exports = {
			modules: [
				'vue-github-buttons/nuxt',
				// Or with options
				['vue-github-buttons/nuxt', {
					css: false, // Don't include CSS
					useCache: false // Don't use cache
				}]
			]
		};
	h3 Module options
	h4: highlight-code(inline) css
	p Type: #[highlight-code(lang='javascript', inline) Boolean]
	p Default: #[highlight-code(lang='javascript', inline) true]
	p Include #[strong Vue GitHub Buttons]'s CSS.
	h4: highlight-code(inline) useCache
	p Type: #[highlight-code(lang='javascript', inline) Boolean]
	p Default: #[highlight-code(lang='javascript', inline) true]
	p Enable caching. (See below)
	hr.gap
	h2 Using with #[blank-link(url='https://vuepress.vuejs.org/') VuePress]
	blockquote Require #[strong VuePress] v1.x
	p.with-code Add #[strong Vue GitHub Buttons] to your plugins in #[highlight-code(inline) .vuepress/config.js].
	highlight-code(lang='js').
		module.exports = {
			plugins: [
				require('vue-github-buttons/plugins/vuepress'),

				/* Or using plugin with options */

				[
					require('vue-github-buttons/plugins/vuepress'),
					{
						useCache: false
					}
				]
			]
		}
</template>

<script>
import components from '../../components';

export default {
	name: 'Usage',
	components
};
</script>

<style scoped>
p.with-code {
	line-height: 2rem;
}
</style>
