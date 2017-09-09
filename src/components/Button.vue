<template>
	<div class="gh-button-container">
		<template v-if="!isLoading">
			<a
				class="gh-button"
				:class="{ 'with-count': hasCount }"
				:href="fullLink"
				target="_blank"
			>
				<component :is="iconComponentName"></component>
				<slot></slot>
			</a>
			<a
				class="social-count"
				:href="fullCountLink"
				:target="hasCountLink ? '_blank' : null"
				v-if="hasCount"
			>
				{{ count | formatNumber }}
			</a>
		</template>
		<template v-else>
			<a class="gh-button">
				<sync-icon></sync-icon>
			</a>
		</template>
	</div>
</template>

<script>
import formatThousands from 'format-thousands';
import { getIconsAsComponent, isset } from '../../lib/utils';

const GH_URL = 'https://github.com';

export default {
	name: 'gh-btns',
	components: getIconsAsComponent(),
	props: {
		icon: {
			type: String,
			required: true
		},
		link: {
			type: String,
			required: true
		},
		isLoading: Boolean,
		count: Number,
		countLink: String
	},
	filters: {
		formatNumber(value) {
			if ((typeof value !== 'undefined') && (value != null)) {
				return formatThousands(value, ',');
			} else {
				return value;
			}
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
