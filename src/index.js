import ES6Promise from 'es6-promise';
import Star from './components/Star.vue';
import Fork from './components/Fork.vue';
import Watch from './components/Watch.vue';
import Follow from './components/Follow.vue';

import 'unfetch/polyfill';
import './scss/main.scss';

ES6Promise.polyfill();

export default {
	install(Vue, options = { useCache: true }) {
		if (options.useCache) {
			Vue.mixin({
				beforeCreate() {
					this.useCache = true;
				}
			});
		}
		Vue.component('gh-btns-star', Star);
		Vue.component('gh-btns-fork', Fork);
		Vue.component('gh-btns-watch', Watch);
		Vue.component('gh-btns-follow', Follow);
	}
};
