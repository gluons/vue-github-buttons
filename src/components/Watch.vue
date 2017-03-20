<template>
	<gh-button
		:icon="icon"
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
import { eye } from '../../resource';
import { ghGet } from '../../lib/utils.js';

export default {
	name: 'gh-btns-watch',
	components: {
		'gh-button': Button
	},
	data() {
		return {
			icon: eye,
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
