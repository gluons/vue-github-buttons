import Vue from 'vue';
import 'vue-github-buttons/dist/vue-github-buttons.css'; // Stylesheet
import VueGitHubButtons from 'vue-github-buttons'; // Component plugin
import App from './App.vue';

Vue.use(VueGitHubButtons, { useCache: true });

new Vue({
	el: '#app',
	render: h => h(App)
});
