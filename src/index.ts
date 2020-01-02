import Vue, { PluginObject } from 'vue';

import Follow from './components/Follow.vue';
import Fork from './components/Fork.vue';
import Star from './components/Star.vue';
import Watch from './components/Watch.vue';
import optionsStore from './lib/OptionsStore';
import Options from './types/Options';

// Main stylesheet
import './scss/main.scss';

export { Options };

if (!IS_WEB_BUNDLE) {
	const nodeFetch = require('node-fetch');

	if (global && !global.fetch) {
		global.fetch = nodeFetch;
		global.Headers = nodeFetch.Headers;
		global.Request = nodeFetch.Request;
		global.Response = nodeFetch.Response;
	}
}

/**
 * Install Vue GitHub buttons as Vue plugin.
 *
 * @param {Vue} vue A Vue instance.
 * @param {Object} [options={ useCache: true }] Options.
 */
function install(vue: typeof Vue, options: Options = { useCache: true }) {
	optionsStore.value = options;

	vue.component('GhBtnsStar', Star);
	vue.component('GhBtnsFork', Fork);
	vue.component('GhBtnsWatch', Watch);
	vue.component('GhBtnsFollow', Follow);
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install
} as PluginObject<Options>;
