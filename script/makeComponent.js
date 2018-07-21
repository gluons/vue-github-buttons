const pascalCase = require('pascal-case');

/**
 * Make Vue component from SVG.
 *
 * @param {string} name Component name
 * @param {string} svgContent SVG content
 * @returns {string}
 */
module.exports = (name, svgContent) => {
	const componentName = pascalCase(name);

	return `
<template>
	${svgContent}
</template>

<script>
export default {
	name: '${componentName}'
};
</script>
`.trim();

};
