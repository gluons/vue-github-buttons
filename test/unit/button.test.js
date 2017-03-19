import Vue from 'vue';
import Button from '@/components/Button';

describe('Button', () => {
	let Ctor = Vue.extend(Button);
	const vm = new Ctor({
		propsData: {
			icon: { path: 'icon-path', width: 16, height: 16 },
			count: 1000,
			link: 'button/link',
			countLink: 'button/count-link'
		}
	}).$mount();

	it('has expected name', () => {
		expect(vm.$options.name).toEqual('gh-btns');
	});
	it('has expected props', () => {
		let props = vm.$props;
		let icon = props.icon;
		expect(icon.path).toBeTruthy();
		expect(icon.width).toBeTruthy();
		expect(icon.height).toBeTruthy();
		expect(props.isLoading).toBeFalsy();
		expect(props.count).toEqual(1000);
		expect(props.link).toBeTruthy();
		expect(props.countLink).toBeTruthy();
	});
	it('has expected data', () => {
		let icon = vm.$data.loadingIcon;
		expect(icon.path).toBeTruthy();
		expect(icon.width).toBeTruthy();
		expect(icon.height).toBeTruthy();
	});
	it('has expected computed values', () => {
		expect(vm.hasCount).toBe(true);
		expect(vm.hasCountLink).toBe(true);
		expect(vm.loadingBox).toBeTruthy();
		expect(vm.box).toBeTruthy();
		expect(vm.fullLink).toMatch(/^(https:\/\/github.com)/);
		expect(vm.fullCountLink).toMatch(/^(https:\/\/github.com)/);
	});
});
