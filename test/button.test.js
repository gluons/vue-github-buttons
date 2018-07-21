import { expect } from 'chai';
import { mount } from '@vue/test-utils';

import Button from '@/components/Button';

describe('Button', () => {
	const wrapper = mount(Button, {
		propsData: {
			icon: 'sync',
			count: 1000,
			link: 'button/link',
			countLink: 'button/count-link'
		}
	});
	const vm = wrapper.vm;

	it('has expected name', () => {
		expect(vm.$options.name).to.equal('GitHubButton');
	});
	it('has expected props', () => {
		let props = vm.$props;
		let icon = props.icon;

		expect(icon).to.equal('sync');
		expect(props.isLoading).to.not.be.undefined;
		expect(props.count).equal(1000);
		expect(props.link).to.be.ok;
		expect(props.countLink).to.be.ok;
	});
	it('has expected computed values', () => {
		expect(vm.iconComponentName).to.not.be.undefined;
		expect(vm.hasCount).to.be.true;
		expect(vm.hasCountLink).to.be.true;
		expect(vm.fullLink).to.match(/^(https:\/\/github.com)/);
		expect(vm.fullCountLink).to.match(/^(https:\/\/github.com)/);
	});
});
