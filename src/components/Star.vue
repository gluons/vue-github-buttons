<template>
	<gh-button
		:is-loading="isLoading"
		:link="slug"
		:count="count"
		:count-link="`${slug}/stargazers`"
		icon="star"
	>
		Star
	</gh-button>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import Button from './Button.vue';
import { getCountMixin, repoMixin } from '../mixins';

@Component({
	name: 'GitHubButtonStar',
	components: {
		'gh-button': Button
	}
})
export default class GitHubButtonStar extends Mixins(getCountMixin, repoMixin) {
	async loadCount() {
		if (this.showCount) {
			const useCache = this['_vue-github-buttons_useCache']
				? true
				: false;
			const requestPath = `/repos/${this.slug}`;
			this.count = await this.getCount(
				requestPath,
				'stargazers_count',
				useCache
			);
		}
	}

	async created() {
		await this.loadCount();
	}
	async updated() {
		await this.loadCount();
	}
}
</script>
