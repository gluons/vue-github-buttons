import Vue from 'vue';
import VueGitHubButtons from 'vue-github-buttons';
import VueHighlightJS from 'vue-highlight.js';

import App from './App.vue';

import 'vue-github-buttons/dist/vue-github-buttons.css';
import 'highlight.js/styles/agate.css';
import './scss/main.scss';

Vue.config.productionTip = false;

Vue.use(VueGitHubButtons);
Vue.use(VueHighlightJS);

new Vue({
	el: '#app',
	render: h => h(App)
});
