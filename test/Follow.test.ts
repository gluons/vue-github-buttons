/// <reference path='../src/sfc.d.ts'/>

import { createLocalVue, mount } from '@vue/test-utils';

import VueGitHubButtons from '../src';
import Follow from '../src/components/Follow.vue';

const localVue = createLocalVue();

describe('Follow', () => {
	localVue.use(VueGitHubButtons);

	const wrapper = mount(Follow, {
		localVue,
		propsData: {
			user: 'gluons',
			showCount: true
		}
	});
	const vm = wrapper.vm as any;

	it('has expected name', () => {
		expect(wrapper.name()).toEqual('GitHubButtonFollow');
	});
	it('has expected props', () => {
		expect(wrapper.props('user')).toEqual('gluons');
		expect(wrapper.props('showCount')).toEqual(true);
	});
	it('has expected data', () => {
		wrapper.setData({
			count: 123
		});

		expect(vm.count).toEqual(123);
	});
});
