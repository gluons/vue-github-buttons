<template>
	<gh-button
		icon="eye"
		:is-loading="isLoading"
		:link="`${slug}/subscription`"
		:count="count"
		:count-link="`${slug}/watchers`"
	>
		Watch
	</gh-button>
</template>

<script>
import Button from './Button.vue';
import { ghGet } from '@lib/utils';

export default {
	name: 'gh-btns-watch',
	components: {
		'gh-button': Button
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
	props: {
		slug: {
			type: String,
			required: true
		},
		showCount: Boolean
	},
	created() {
		if (this.showCount) {
			let useCache = this['_vue-github-buttons_useCache'] ? true : false;
			ghGet(`/repos/${this.slug}`, useCache).then(
				res => {
					this.count = parseInt(res['subscribers_count']);
				},
				() => {
					this.count = -1; // Don't show count when error.
				}
			);
		}
	},
	updated() {
		if (this.showCount) {
			let useCache = this['_vue-github-buttons_useCache'] ? true : false;
			ghGet(`/repos/${this.slug}`, useCache).then(
				res => {
					this.count = parseInt(res['subscribers_count']);
				},
				() => {
					this.count = -1; // Don't show count when error.
				}
			);
		}
	}
};
</script>
