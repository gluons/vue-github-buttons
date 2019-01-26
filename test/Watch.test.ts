/// <reference path='../src/sfc.d.ts'/>

import { createLocalVue, mount } from '@vue/test-utils';

import VueGitHubButtons from '../src';
import Watch from '../src/components/Watch.vue';

const localVue = createLocalVue();

describe('Watch', () => {
	localVue.use(VueGitHubButtons);

	const wrapper = mount(Watch, {
		localVue,
		propsData: {
			slug: 'gluons/vue-github-buttons',
			showCount: true
		}
	});
	const vm = wrapper.vm as any;

	it('has expected name', () => {
		expect(wrapper.name()).toEqual('GitHubButtonWatch');
	});
	it('has expected props', () => {
		expect(wrapper.props('slug')).toEqual('gluons/vue-github-buttons');
		expect(wrapper.props('showCount')).toEqual(true);
	});
	it('has expected data', () => {
		wrapper.setData({
			count: 123
		});

		expect(vm.count).toEqual(123);
	});
	it('has expected custom values', () => {
		expect(vm['_vue-github-buttons_useCache']).toBeDefined();
	});
});
