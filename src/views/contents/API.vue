<template lang="pug">
#api
	h2 API

	h3 Plugin Option
	h4: highlight-code(inline) useCache
	p Type: #[highlight-code(lang='javascript', inline) Boolean]
	p Default: #[highlight-code(lang='javascript', inline) true]
	p Enable count number caching. (Use #[blank-link(url='https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage') session storage])
	blockquote GitHub API has #[blank-link(url='https://developer.github.com/v3/#rate-limiting') limited requests]. So, caching may be useful when user refresh the webpage.

	h3 Components
	.component-api-container
		h4: highlight-code(inline) gh-btns-watch
		p 👁️ A watch button.
		ul.attributes
			li #[highlight-code(inline) slug] - GitHub slug (username/repo).
			li #[highlight-code(inline) show-count] - Enable displaying the count number.
	.component-api-container
		h4: highlight-code(inline) gh-btns-star
		p ⭐ A star button.
		ul.attributes
			li #[highlight-code(inline) slug] - GitHub slug (username/repo).
			li #[highlight-code(inline) show-count] - Enable displaying the count number.
	.component-api-container
		h4: highlight-code(inline) gh-btns-fork
		p 🍴 A fork button.
		ul.attributes
			li #[highlight-code(inline) slug] - GitHub slug (username/repo).
			li #[highlight-code(inline) show-count] - Enable displaying the count number.
	.component-api-container
		h4: highlight-code(inline) gh-btns-follow
		p 👤 A follow button.
		ul.attributes
			li #[highlight-code(inline) user] - GitHub username.
			li #[highlight-code(inline) show-count] - Enable displaying the count number.
</template>

<script>
import components from '../../components';

export default {
	name: 'API',
	components
};
</script>

<style lang="scss">
.component-api-container {
	margin: 3rem 0;

	&:first-of-type {
		margin-top: 0 !important;
	}

	&:last-of-type {
		margin-bottom: 0 !important;
	}

	ul.attributes li {
		line-height: 2rem;
	}
}
</style>
