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
import { Component, Prop, Mixins } from 'vue-property-decorator';

import Button from './Button.vue';
import getCountMixin from '../mixins/getCount';

@Component({
	name: 'GitHubButtonFork',
	components: {
		'gh-button': Button
	}
})
export default class GitHubButtonFork extends Mixins(getCountMixin) {
	@Prop({ type: String, required: true }) slug: string;
	@Prop({ type: Boolean, default: false }) showCount: boolean;

	count: number = null;

	get isLoading(): boolean {
		if (this.showCount) {
			return this.count == null;
		} else {
			return false;
		}
	}

	async loadCount() {
		if (this.showCount) {
			const useCache = this['_vue-github-buttons_useCache'] ? true : false;
			const requestPath = `/repos/${this.slug}`;
			this.count = await this.getCount(requestPath, 'forks_count', useCache);
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
