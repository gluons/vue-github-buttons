// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueGitHubButtons from 'vue-github-buttons';
import VueHighlightJS from 'vue-highlight.js';
import App from './App';

import 'vue-github-buttons/dist/vue-github-buttons.css';
import 'highlight.js/styles/agate.css';
import './scss/main.scss';

Vue.use(VueGitHubButtons);
Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
});
