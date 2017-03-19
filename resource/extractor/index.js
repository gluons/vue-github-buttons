const camelCase = require('camelcase');
const fsp = require('fs-promise');
const path = require('path');
const octicons = require('octicons');
const extractOcticonPath = require('../../lib/utils').extractOcticonPath;

const iconsName = require('./icons-name.json').icons;

let resource = {};

iconsName.forEach(name => {
	let icon = octicons[name];
	resource[camelCase(name)] = {
		path: extractOcticonPath(icon.path),
		width: parseFloat(icon.width),
		height: parseFloat(icon.height)
	};
});

// Create script content
let content = 'module.exports = ';
content += JSON.stringify(resource, null, '\t').replace(/"/g, "'");
content += ';';

// Write file
let filePath = path.resolve(__dirname, '../index.js');
(function () {
	if (fsp.existsSync(filePath)) {
		return fsp.unlink(filePath);
	} else {
		return Promise.resolve();
	}
}())
	.then(() => {
		return fsp.writeFile(filePath, content);
	})
	.then(() => {
		console.log('Resource created.');
	})
	.catch(err => {
		console.error(err.toString());
	});
