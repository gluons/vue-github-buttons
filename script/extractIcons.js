const chalk = require('chalk');
const {
	existsSync,
	removeSync,
	ensureDirSync,
	writeFile
} = require('fs-extra');
const octicons = require('octicons');
const { join, resolve } = require('path');

const makeComponent = require('./makeComponent');

const { green, red } = chalk;
const iconsName = require('./icons-name.json').icons;
const iconDestPath = resolve(__dirname, '../src/components/icons');

// Clean old icons
if (existsSync(iconDestPath)) {
	removeSync(iconDestPath);
}
ensureDirSync(iconDestPath);

let fileIconPromises = iconsName.map(iconName => {
	let icon = octicons[iconName];

	// If it's sync icon, add spin class.
	let options = (iconName == 'sync') ? { class: 'spin' } : {};

	let iconSVG = icon.toSVG(options);
	let iconComponent = makeComponent(`${iconName}Icon`, iconSVG);
	let iconFileName = `${iconName}-icon.vue`;
	let iconComponentPath = join(iconDestPath, iconFileName);

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
