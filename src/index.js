import ES6Promise from 'es6-promise';
import Star from './components/Star.vue';
import Fork from './components/Fork.vue';
import Watch from './components/Watch.vue';
import Follow from './components/Follow.vue';

ES6Promise.polyfill();

import 'unfetch/polyfill';
import './scss/main.scss';


export default {
	install(Vue, options = { useCache: true }) {
		if (options.useCache) {
			Vue.mixin({
				beforeCreate() {
					// Use `_vue-github-buttons_useCache` as parameter for injecting into components.
					this['_vue-github-buttons_useCache'] = true;
				}
			});
		}
		Vue.component('gh-btns-star', Star);
		Vue.component('gh-btns-fork', Fork);
		Vue.component('gh-btns-watch', Watch);
		Vue.component('gh-btns-follow', Follow);
	}
};
