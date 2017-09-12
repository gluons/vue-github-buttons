<template>
	<gh-button
		icon="repo-forked"
		:is-loading="isLoading"
		:link="`${slug}/fork`"
		:count="count"
		:count-link="`${slug}/network`"
	>
		Fork
	</gh-button>
</template>

<script>
import Button from './Button.vue';
import getCountMixin from '@/mixins/getCount';

export default {
	name: 'gh-btns-fork',
	components: {
		'gh-button': Button
	},
	mixins: [getCountMixin],
	props: {
		slug: {
			type: String,
			required: true
		},
		showCount: Boolean
	},
	data() {
		return {
			count: null
		};
	},
	computed: {
		isLoading() {
			if (this.showCount) {
				return this.count == null;
			} else {
				return false;
			}
		}
	},
	async created() {
		if (this.showCount) {
			let useCache = this['_vue-github-buttons_useCache'] ? true : false;
			let requestPath = `/repos/${this.slug}`;
			this.count = await this.getCount(requestPath, 'forks_count', useCache);
		}
	},
	async updated() {
		if (this.showCount) {
			let useCache = this['_vue-github-buttons_useCache'] ? true : false;
			let requestPath = `/repos/${this.slug}`;
			this.count = await this.getCount(requestPath, 'forks_count', useCache);
		}
	}
};
</script>
