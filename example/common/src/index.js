import Vue from 'vue';
import VueGitHubButtons from 'vue-github-buttons';

import Home from './Home.vue';

import 'vue-github-buttons/dist/vue-github-buttons.css';

Vue.use(VueGitHubButtons);

new Vue({
	el: '#app',
	render: h => h(Home)
});
