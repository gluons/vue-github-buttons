import Vue from 'vue';

declare global {
	const GH_TOKEN: string;

	interface Window {
		Vue: typeof Vue;
	}
}
