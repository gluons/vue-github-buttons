import Vue from 'vue';
import Fork from '@/components/Fork.vue';

describe('Fork', () => {
	let Ctor = Vue.extend(Fork);
	const vm = new Ctor({
		propsData: {
			slug: 'gluons/vue-github-buttons',
			showCount: true
		},
		mixins: [
			{
				beforeCreate() {
					this.useCache = true;
				}
			}
		]
	}).$mount();

	it('has expected name', () => {
		expect(vm.$options.name).toEqual('gh-btns-fork');
	});
	it('has expected props', () => {
		let props = vm.$props;
		expect(props.slug).toEqual('gluons/vue-github-buttons');
		expect(props.showCount).toBe(true);
	});
	it('has expected data', () => {
		let data = vm.$data;
		let icon = data.icon;
		expect(icon.path).toBeTruthy();
		expect(icon.width).toBeTruthy();
		expect(icon.height).toBeTruthy();
	});
	it('has expected computed values', () => {
		expect(vm.useCache).toBeDefined();
	});
});
