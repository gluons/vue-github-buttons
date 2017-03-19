<template>
	<gh-button
		:icon="icon"
		:is-loading="isLoading"
		:link="user"
		:count="count"
		:count-link="`${user}/followers`"
	>
		Follow
	</gh-button>
</template>

<script>
import Button from './Button.vue';
import { markGithub } from '../../resource';
import { ghGet } from '../../lib/utils.js';

export default {
	components: {
		'gh-button': Button
	},
	data() {
		return {
			icon: markGithub,
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
		user: {
			type: String,
			required: true
		},
		showCount: Boolean
	},
	created() {
		if (this.showCount) {
			let useCache = this.useCache ? true : false;
			ghGet(`/users/${this.user}`, useCache).then(
				res => {
					this.count = parseInt(res['followers']);
				},
				() => {
					this.count = -1; // Don't show count when error.
				}
			);
		}
	},
	updated() {
		if (this.showCount) {
			let useCache = this.useCache ? true : false;
			ghGet(`/users/${this.user}`, useCache).then(
				res => {
					this.count = parseInt(res['followers']);
				},
				() => {
					this.count = -1; // Don't show count when error.
				}
			);
		}
	}
};
</script>
