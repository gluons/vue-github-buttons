import Vue from 'vue';

declare global {
	const GH_TOKEN: string;
	const IS_WEB_BUNDLE: boolean;

	interface Window {
		Vue: typeof Vue;
	}
}
