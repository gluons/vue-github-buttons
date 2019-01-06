import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserMixin extends Vue {
	@Prop({ type: String, required: true }) user: string;
	@Prop({ type: Boolean, default: false }) showCount: boolean;

	count: number = null;

	get isLoading(): boolean {
		if (this.showCount) {
			return this.count == null;
		} else {
			return false;
		}
	}
}
