<template>
	<gh-button
		:is-loading="isLoading"
		:link="`${slug}/subscription`"
		:count="count"
		:count-link="`${slug}/watchers`"
		icon="eye"
	>
		Watch
	</gh-button>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import Button from './Button.vue';
import optionsStore from '../lib/OptionsStore';
import { getCountMixin, repoMixin } from '../mixins';

@Component({
	name: 'GitHubButtonWatch',
	components: {
		'gh-button': Button
	}
})
export default class GitHubButtonWatch extends Mixins(
	getCountMixin,
	repoMixin
) {
	async loadCount() {
		if (this.showCount) {
			const { useCache } = optionsStore.value;
			let requestPath = `/repos/${this.slug}`;
			this.count = await this.getCount(
				requestPath,
				'subscribers_count',
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
