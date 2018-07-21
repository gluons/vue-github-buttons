<template>
	<div class="gh-button-container">
		<template v-if="!isLoading">
			<a
				:class="{ 'with-count': hasCount }"
				:href="fullLink"
				class="gh-button"
				target="_blank"
			>
				<component :is="iconComponentName" />
				<slot />
			</a>
			<a
				v-if="hasCount"
				:href="fullCountLink"
				:target="hasCountLink ? '_blank' : null"
				class="social-count"
			>
				{{ count | formatNumber }}
			</a>
		</template>
		<template v-else>
			<a class="gh-button">
				<sync-icon />
			</a>
		</template>
	</div>
</template>

<script>
import formatThousands from 'format-thousands';
import { isset } from '@lib/utils';
import getIconComponents from '@/getIconComponents';

const GH_URL = 'https://github.com';

export default {
	name: 'GitHubButton',
	components: getIconComponents(),
	filters: {
		formatNumber(value) {
			if ((typeof value !== 'undefined') && (value != null)) {
				return formatThousands(value, ',');
			} else {
				return value;
			}
		}
	},
	props: {
		icon: {
			type: String,
			required: true
		},
		link: {
			type: String,
			required: true
		},
		isLoading: {
			type: Boolean,
			default: false
		},
		count: {
			type: Number,
			default: 0
		},
		countLink: {
			type: String,
			default: ''
		}
	},
	computed: {
		iconComponentName() {
			return `${this.icon}-icon`;
		},
		hasCount() {
			let count = this.count;
			// Show count when count exist and greater than or equal to 0.
			return isset(count) && (count >= 0);
		},
		hasCountLink() {
			let countLink = this.countLink;
			return isset(countLink);
		},
		fullLink() {
			return `${GH_URL}/${this.link}`;
		},
		fullCountLink() {
			let countLink = this.countLink;
			if (this.hasCountLink) {
				return `${GH_URL}/${countLink}`;
			} else {
				return 'javascript:void(0);';
			}
		}
	}
};
</script>
