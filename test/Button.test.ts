/// <reference path='../src/sfc.d.ts'/>

import { mount } from '@vue/test-utils';
import { expect } from 'chai';

import Button from '../src/components/Button.vue';

describe('Button', () => {
	const wrapper = mount(Button, {
		propsData: {
			icon: 'sync',
			count: 1000,
			link: 'button/link',
			countLink: 'button/count-link'
		}
	});
	const vm = wrapper.vm as any;

	it('has expected name', () => {
		expect(wrapper.name()).to.equal('GitHubButton');
	});
	it('has expected props', () => {
		expect(wrapper.props('icon')).to.equal('sync');
		expect(wrapper.props('isLoading')).to.not.be.undefined;
		expect(wrapper.props('count')).to.equal(1000);
		expect(wrapper.props('link')).to.be.ok;
		expect(wrapper.props('countLink')).to.be.ok;
	});
	it('has expected computed values', () => {
		expect(vm.iconComponentName).to.not.be.undefined;
		expect(vm.hasCount).to.equal(true);
		expect(vm.hasCountLink).to.equal(true);
		expect(vm.fullLink).to.match(/^(https:\/\/github.com)/);
		expect(vm.fullCountLink).to.match(/^(https:\/\/github.com)/);
	});
});
