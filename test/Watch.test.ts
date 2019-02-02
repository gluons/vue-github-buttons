/// <reference path='../src/sfc.d.ts'/>

import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';

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
		expect(wrapper.name()).to.equal('GitHubButtonWatch');
	});
	it('has expected props', () => {
		expect(wrapper.props('slug')).to.equal('gluons/vue-github-buttons');
		expect(wrapper.props('showCount')).to.equal(true);
	});
	it('has expected data', () => {
		wrapper.setData({
			count: 123
		});

		expect(vm.count).to.equal(123);
	});
});
