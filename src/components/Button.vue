<template>
	<div class="gh-button-container">
		<template v-if="!isLoading">
			<a
				class="gh-button"
				:class="{ 'with-count': hasCount }"
				:href="fullLink"
				target="_blank"
			>
				<svg class="octicon" :width="icon.width" :height="icon.height" :viewBox="box">
					<path :d="icon.path"></path>
				</svg>
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
				<svg class="octicon spin" :width="loadingIcon.width" :height="loadingIcon.height" :viewBox="loadingBox">
					<path :d="loadingIcon.path"></path>
				</svg>
			</a>
		</template>
	</div>
</template>

<script>
import formatThousands from 'format-thousands';
import { sync } from '../../resource';

const GH_URL = 'https://github.com';
let isset = value => (typeof value !== 'undefined') && (value != null) && (value != '');

export default {
	name: 'gh-btns',
	props: {
		icon: {
			validator(value) {
				return isset(value.path) && isset(value.width) && isset(value.height);
			},
			required: true
		},
		isLoading: Boolean,
		count: Number,
		link: {
			type: String,
			required: true
		},
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
	data() {
		return {
			loadingIcon: sync
		};
	},
	computed: {
		hasCount() {
			let count = this.count;
			// Show count when count exist and greater than or equal to 0.
			return (typeof count !== 'undefined') && (count != null) && (count >= 0);
		},
		hasCountLink() {
			let countLink = this.countLink;
			return (typeof countLink !== 'undefined') && (countLink != null);
		},
		loadingBox() {
			return `0 0 ${this.loadingIcon.width} ${this.loadingIcon.height}`;
		},
		box() {
			return `0 0 ${this.icon.width} ${this.icon.height}`;
		},
		fullLink() {
			return `${GH_URL}/${this.link}`;
		},
		fullCountLink() {
			let countLink = this.countLink;
			if ((typeof countLink !== 'undefined') && (countLink != null)) {
				return `${GH_URL}/${this.countLink}`;
			} else {
				return 'javascript:void(0);';
			}
		}
	}
};
</script>
