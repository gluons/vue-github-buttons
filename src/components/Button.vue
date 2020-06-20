<template>
	<div class="gh-button-container">
		<template v-if="!isLoading">
			<a
				:class="{ 'with-count': hasCount }"
				:href="fullLink"
				class="gh-button"
				target="_blank"
				rel="noopener"
			>
				<component :is="iconComponentName" />
				<slot />
			</a>
			<a
				v-if="hasCount"
				:href="fullCountLink"
				:target="hasCountLink ? '_blank' : null"
				class="social-count"
				rel="noopener"
			>
				{{ count | formatNumber }}
			</a>
		</template>
		<template v-else>
			<a class="gh-button">
				<sync-icon/>
			</a>
		</template>
	</div>
</template>

<script lang="ts">
import formatThousands from 'format-thousands';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { GH_URL } from '../lib/constants';
import { isset } from '../utils/';
import getIconComponents from '../getIconComponents';

@Component({
	name: 'GitHubButton',
	components: getIconComponents(),
	filters: {
		formatNumber(value: string) {
			if ((typeof value !== 'undefined') && (value != null)) {
				return formatThousands(value, ',');
			} else {
				return value;
			}
		}
	}
})
export default class GitHubButton extends Vue {
	@Prop({ type: String, required: true }) icon: string;
	@Prop({ type: String, required: true }) link: string;
	@Prop({ type: Boolean, default: false }) isLoading: boolean;
	@Prop({ type: Number, default: 0 }) count: number;
	@Prop({ type: String, default: '' }) countLink: string;

	get iconComponentName(): string {
		return `${this.icon}-icon`;
	}
	get hasCount(): boolean {
		const { count } = this;

		// Show count when count exist and greater than or equal to 0
		return isset(count) && (count >= 0);
	}
	get hasCountLink(): boolean {
		const countLink = this.countLink;

		return isset(countLink);
	}
	get fullLink(): string {
		return `${GH_URL}/${this.link}`;
	}
	get fullCountLink(): string {
		const { countLink } = this;

		if (this.hasCountLink) {
			return `${GH_URL}/${countLink}`;
		} else {
			return 'javascript:void(0);';
		}
	}
}
</script>
