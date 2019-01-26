/// <reference path='../src/sfc.d.ts'/>

import { mount } from '@vue/test-utils';

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
		expect(wrapper.name()).toEqual('GitHubButton');
	});
	it('has expected props', () => {
		expect(wrapper.props('icon')).toEqual('sync');
		expect(wrapper.props('isLoading')).toBeDefined();
		expect(wrapper.props('count')).toEqual(1000);
		expect(wrapper.props('link')).toBeTruthy();
		expect(wrapper.props('countLink')).toBeTruthy();
	});
	it('has expected computed values', () => {
		expect(vm.iconComponentName).toBeDefined();
		expect(vm.hasCount).toEqual(true);
		expect(vm.hasCountLink).toEqual(true);
		expect(vm.fullLink).toMatch(/^(https:\/\/github.com)/);
		expect(vm.fullCountLink).toMatch(/^(https:\/\/github.com)/);
	});
});
