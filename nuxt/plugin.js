import Vue from 'vue';
import VueGitHubButtons from 'vue-github-buttons';

Vue.use(VueGitHubButtons, {
	useCache: <%= options.useCache %>
});
