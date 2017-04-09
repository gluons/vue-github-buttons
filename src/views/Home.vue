<template lang="pug">
#home
	header
		h1 #[v]ue GitHub Buttons
		p #[octocat] #[blank-link(url='https://github.com') GitHub] buttons component for #[blank-link(url='https://vuejs.org') Vue].
		p.repo-buttons-container
			gh-btns-star(slug='gluons/vue-github-buttons' show-count)
			gh-btns-fork(slug='gluons/vue-github-buttons' show-count)
	hr.divider
	main
		installation
		hr.gap
		components-demo
		hr.gap
		usage
		hr.gap
		api
	footer
		div Made by #[a(href="https://github.com/gluons", target="_blank") Saran Tanpituckpong]
		div(style="margin-top: .5em;")
			a(href="https://github.com/gluons/vue-github-buttons/tree/docs", target="_blank") View Source
</template>

<script>
import components from '../components';
import contents from './contents';

export default {
	name: 'home',
	components: {
		...components,
		...contents
	}
};
</script>

<style lang="scss">
#home {
	header, footer {
		text-align: center;
	}
	footer {
		font-size: .9em;
		margin-top: 3.5em;
	}
	main {
		max-width: 80%;
		margin: 0 auto;
		@media (max-width: 768px) {
			max-width: 100% !important;
		}
	}
	.repo-buttons-container {
		.gh-button-container {
			margin: 0 1em !important;
		}
	}
}
</style>
