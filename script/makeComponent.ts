import pascalCase from 'pascal-case';

/**
 * Make Vue component from SVG.
 *
 * @export
 * @param {string} name Component name
 * @param {string} svgContent SVG content
 * @returns {string}
 */
export default function makeComponent(
	name: string,
	svgContent: string
): string {
	const componentName = pascalCase(name);

	return `
<template>
	${svgContent}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
	name: '${componentName}'
})
export default class ${componentName} extends Vue {}
</script>
`.trim();
}
