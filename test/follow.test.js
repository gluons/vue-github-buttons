import { expect } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';

import VueGitHubButtons from '@/index';
import Follow from '@/components/Follow.vue';

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
	const vm = wrapper.vm;

	it('has expected name', () => {
		expect(vm.$options.name).to.equal('GitHubButtonFollow');
	});
	it('has expected props', () => {
		let props = vm.$props;

		expect(props.user).to.equal('gluons');
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
