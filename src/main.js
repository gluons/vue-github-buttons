import Vue from 'vue';
import VueGitHubButtons from 'vue-github-buttons';
import VueHighlightJS from 'vue-highlight.js';
import VueGitHubCorners from 'vue-gh-corners';

import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';

import App from './App.vue';

import 'vue-github-buttons/dist/vue-github-buttons.css';
import 'highlight.js/styles/agate.css';
import 'vue-gh-corners/dist/vue-github-corners.css';
import './scss/main.scss';

Vue.config.productionTip = false;

Vue.use(VueGitHubButtons);
Vue.use(VueHighlightJS, {
	languages: {
		bash,
		css,
		javascript,
		vue
	}
});
Vue.use(VueGitHubCorners);

new Vue({
	el: '#app',
	render: h => h(App)
});
