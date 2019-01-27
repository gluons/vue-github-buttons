/// <reference path='../src/sfc.d.ts'/>

import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';

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
		expect(wrapper.name()).to.equal('GitHubButtonFork');
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
