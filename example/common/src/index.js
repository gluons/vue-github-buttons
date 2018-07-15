import Vue from 'vue';
import VueGitHubButtons from '../../../dist/vue-github-buttons.es';

import Home from './Home.vue';

import '../../../dist/vue-github-buttons.css';

Vue.use(VueGitHubButtons);

new Vue({
	el: '#app',
	render: h => h(Home)
});
