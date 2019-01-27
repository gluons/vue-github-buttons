<template>
	<gh-button
		:is-loading="isLoading"
		:link="`${slug}/fork`"
		:count="count"
		:count-link="`${slug}/network`"
		icon="repo-forked"
	>
		Fork
	</gh-button>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import Button from './Button.vue';
import optionsStore from '../lib/OptionsStore';
import { getCountMixin, repoMixin } from '../mixins';

@Component({
	name: 'GitHubButtonFork',
	components: {
		'gh-button': Button
	}
})
export default class GitHubButtonFork extends Mixins(getCountMixin, repoMixin) {
	async loadCount() {
		if (this.showCount) {
			const { useCache } = optionsStore.value;
			const requestPath = `/repos/${this.slug}`;
			this.count = await this.getCount(
				requestPath,
				'forks_count',
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
