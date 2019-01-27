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

/**
 * Install Vue GitHub buttons as Vue plugin.
 *
 * @param {Vue} vue A Vue instance.
 * @param {Object} [options={ useCache: true }] Options.
 */
function install(vue: typeof Vue, options: Options = { useCache: true }) {
	optionsStore.value = options;

	vue.component('gh-btns-star', Star);
	vue.component('gh-btns-fork', Fork);
	vue.component('gh-btns-watch', Watch);
	vue.component('gh-btns-follow', Follow);
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install
} as PluginObject<Options>;
