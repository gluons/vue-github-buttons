module.exports = ({ useCache } = { useCache: true }) => {
	return {
		name: 'vue-github-buttons',
		enhanceAppFiles() {
			return {
				name: 'vue-github-buttons-dynamic-code',
				content: `import VueGitHubButtons from 'vue-github-buttons';

				import 'vue-github-buttons/dist/vue-github-buttons.css';

				export default ({ Vue }) => {
					Vue.use(VueGitHubButtons, { useCache: ${useCache} });
				};
				`
			};
		}
	};
};
