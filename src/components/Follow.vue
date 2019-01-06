<template>
	<gh-button
		:is-loading="isLoading"
		:link="user"
		:count="count"
		:count-link="`${user}/followers`"
		icon="mark-github"
	>
		Follow
	</gh-button>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import Button from './Button.vue';
import { getCountMixin, userMixin } from '../mixins';

@Component({
	name: 'GitHubButtonFollow',
	components: {
		'gh-button': Button
	}
})
export default class GitHubButtonFollow extends Mixins(
	getCountMixin,
	userMixin
) {
	async loadCount() {
		if (this.showCount) {
			const useCache = this['_vue-github-buttons_useCache']
				? true
				: false;
			const requestPath = `/users/${this.user}`;
			this.count = await this.getCount(
				requestPath,
				'followers',
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
