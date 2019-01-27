/// <reference path='../src/sfc.d.ts'/>

import { createLocalVue, mount } from '@vue/test-utils';

import VueGitHubButtons from '../src';
import Fork from '../src/components/Fork.vue';

const localVue = createLocalVue();

describe('Fork', () => {
	localVue.use(VueGitHubButtons);

	const wrapper = mount(Fork, {
		localVue,
		propsData: {
			slug: 'gluons/vue-github-buttons',
			showCount: true
		}
	});
	const vm = wrapper.vm as any;

	it('has expected name', () => {
		expect(wrapper.name()).toEqual('GitHubButtonFork');
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
});
