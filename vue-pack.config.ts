import { Configuration } from '@gluons/vue-pack';
import nvl from 'nvl';
import { resolve } from 'path';

export default {
	entry: resolve(__dirname, './src/index.ts'),
	libraryName: 'libraryName',
	fileName: 'vue-github-buttons',
	define: {
		GH_TOKEN: ''
	},
	dev: {
		entry: resolve(__dirname, './dev/index.ts'),
		define: {
			GH_TOKEN: nvl(process.env.GITHUB_DEV_TOKEN, '')
		},
		htmlTitle: 'Vue GitHub Buttons'
	}
} as Configuration;
