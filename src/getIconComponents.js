import EyeIcon from '@/components/icons/eye-icon';
import MarkGithubIcon from '@/components/icons/mark-github-icon';
import RepoForkedIcon from '@/components/icons/repo-forked-icon';
import StarIcon from '@/components/icons/star-icon';
import SyncIcon from '@/components/icons/sync-icon';

/**
 * Get all SVG icons as component.
 *
 * @export
 */
export default () => {
	return {
		'eye-icon': EyeIcon,
		'mark-github-icon': MarkGithubIcon,
		'repo-forked-icon': RepoForkedIcon,
		'star-icon': StarIcon,
		'sync-icon': SyncIcon
	};
};
