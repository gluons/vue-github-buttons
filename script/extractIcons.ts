import chalk from 'chalk';
import { ensureDirSync, existsSync, removeSync, writeFile } from 'fs-extra';
import octicons from 'octicons';
import { join, resolve } from 'path';

import makeComponent from './makeComponent';

const { green, red } = chalk;
const iconsName: string[] = require('./icons-name.json').icons;
const iconDestPath = resolve(__dirname, '../src/components/icons');

// Clean old icons
if (existsSync(iconDestPath)) {
	removeSync(iconDestPath);
}
ensureDirSync(iconDestPath);

const fileIconPromises = iconsName.map(iconName => {
	const icon = octicons[iconName];

	// If it's sync icon, add spin class.
	const options = (iconName === 'sync') ? { class: 'spin' } : {};

	const iconSVG = icon.toSVG(options);
	const iconComponent = makeComponent(`${iconName}Icon`, iconSVG);
	const iconFileName = `${iconName}-icon.vue`;
	const iconComponentPath = join(iconDestPath, iconFileName);

	return writeFile(iconComponentPath, iconComponent, 'utf8');
});

Promise.all(fileIconPromises)
	.then(() => {
		console.log(green('Extract SVG icons succeed.'));
	})
	.catch(err => {
		console.log(red('Extract SVG icons fail.'));
		console.error(err);
	});
