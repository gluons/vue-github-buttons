const chalk = require('chalk');
const fs = require('fs-extra');
const octicons = require('octicons');
const path = require('path');

const { green, red } = chalk;
const iconsName = require('./icons-name.json').icons;
const iconDestPath = path.join(__dirname, '../resource/icons');

let fileIconPromises = iconsName.map(iconName => {
	let icon = octicons[iconName];
	let iconSVG = icon.toSVG();
	return fs.writeFile(path.resolve(iconDestPath, `${iconName}.svg`), iconSVG, 'utf8');
});

Promise.all(fileIconPromises)
	.then(() => {
		console.log(green('Extract SVG icons succeed.'));
	})
	.catch(err => {
		console.log(red('Extract SVG icons fail.'));
		console.error(err);
	});
