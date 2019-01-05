import EyeIcon from './components/icons/eye-icon.vue';
import MarkGithubIcon from './components/icons/mark-github-icon.vue';
import RepoForkedIcon from './components/icons/repo-forked-icon.vue';
import StarIcon from './components/icons/star-icon.vue';
import SyncIcon from './components/icons/sync-icon.vue';

/**
 * Get all SVG icons as component.
 *
 * @export
 */
export default () => {
	return {
		EyeIcon,
		MarkGithubIcon,
		RepoForkedIcon,
		StarIcon,
		SyncIcon
	};
};
