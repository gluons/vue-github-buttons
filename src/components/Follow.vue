<template>
	<gh-button
		icon="mark-github"
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
import getCountMixin from '@/mixins/getCount';

export default {
	name: 'gh-btns-follow',
	components: {
		'gh-button': Button
	},
	mixins: [getCountMixin],
	props: {
		user: {
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
			let requestPath = `/users/${this.user}`;
			this.count = await this.getCount(requestPath, 'followers', useCache);
		}
	},
	async updated() {
		if (this.showCount) {
			let useCache = this['_vue-github-buttons_useCache'] ? true : false;
			let requestPath = `/users/${this.user}`;
			this.count = await this.getCount(requestPath, 'followers', useCache);
		}
	}
};
</script>
