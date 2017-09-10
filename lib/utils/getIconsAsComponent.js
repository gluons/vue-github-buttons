import EyeIcon from '@rs/icons/eye.vue.svg';
import MarkGithubIcon from '@rs/icons/mark-github.vue.svg';
import RepoForkedIcon from '@rs/icons/repo-forked.vue.svg';
import StarIcon from '@rs/icons/star.vue.svg';
import SyncIcon from '@rs/icons/sync.vue.svg';

const components = {
	'eye-icon': EyeIcon,
	'mark-github-icon': MarkGithubIcon,
	'repo-forked-icon': RepoForkedIcon,
	'star-icon': StarIcon,
	'sync-icon': SyncIcon
};

/**
 * Get all SVG icons as component.
 *
 * @returns SVG icon components.
 */
function getIconsAsComponent() {
	return components;
}

export default getIconsAsComponent;
