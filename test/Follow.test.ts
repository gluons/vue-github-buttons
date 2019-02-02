/// <reference path='../src/sfc.d.ts'/>

import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';

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
		expect(wrapper.name()).to.equal('GitHubButtonFollow');
	});
	it('has expected props', () => {
		expect(wrapper.props('user')).to.equal('gluons');
		expect(wrapper.props('showCount')).to.equal(true);
	});
	it('has expected data', () => {
		wrapper.setData({
			count: 123
		});

		expect(vm.count).to.equal(123);
	});
});
