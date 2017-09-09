import Vue from 'vue';
import VueGitHubButtons from '../../src/index';
import Star from '@/components/Star.vue';

describe('Star', () => {
	Vue.use(VueGitHubButtons);
	let Ctor = Vue.extend(Star);
	const vm = new Ctor({
		propsData: {
			slug: 'gluons/vue-github-buttons',
			showCount: true
		},
		data() {
			return {
				count: 123
			};
		}
	}).$mount();

	it('has expected name', () => {
		expect(vm.$options.name).toEqual('gh-btns-star');
	});
	it('has expected props', () => {
		let props = vm.$props;
		expect(props.slug).toEqual('gluons/vue-github-buttons');
		expect(props.showCount).toBe(true);
	});
	it('has expected data', () => {
		let data = vm.$data;
		let count = data.count;
		expect(count).toEqual(123);
	});
	it('has expected custom values', () => {
		expect(vm['_vue-github-buttons_useCache']).toBeDefined();
	});
});
