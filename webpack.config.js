const getConfig = require('./build/getConfig');

module.exports = [
	getConfig('web'),
	getConfig('web', true),
	getConfig('common'),
	getConfig('esm')
];
