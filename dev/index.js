import Vue from 'vue';
import VueGitHubButtons from '@/index';
import App from './App.vue';

Vue.use(VueGitHubButtons);

new Vue({
	el: '#app',
	render: h => h(App)
});
