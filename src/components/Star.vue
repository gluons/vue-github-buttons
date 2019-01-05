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
import { Component, Prop, Mixins } from 'vue-property-decorator';

import Button from './Button.vue';
import getCountMixin from '../mixins/getCount';

@Component({
	name: 'GitHubButtonStar',
	components: {
		'gh-button': Button
	}
})
export default class GitHubButtonStar extends Mixins(getCountMixin) {
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
			let requestPath = `/repos/${this.slug}`;
			this.count = await this.getCount(requestPath, 'stargazers_count', useCache);
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
