import { expect } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';

import VueGitHubButtons from '@/index';
import Star from '@/components/Star.vue';

const localVue = createLocalVue();

describe('Star', () => {
	localVue.use(VueGitHubButtons);

	const wrapper = mount(Star, {
		localVue,
		propsData: {
			slug: 'gluons/vue-github-buttons',
			showCount: true
		}
	});
	const vm = wrapper.vm;

	it('has expected name', () => {
		expect(vm.$options.name).to.equal('GitHubButtonStar');
	});
	it('has expected props', () => {
		let props = vm.$props;
		expect(props.slug).to.equal('gluons/vue-github-buttons');
		expect(props.showCount).to.be.true;
	});
	it('has expected data', () => {
		wrapper.setData({
			count: 123
		});

		expect(vm.count).to.equal(123);
	});
	it('has expected custom values', () => {
		expect(vm['_vue-github-buttons_useCache']).to.not.be.undefined;
	});
});
