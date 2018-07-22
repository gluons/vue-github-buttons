<template lang="pug">
#installation
	h2 Installation
	p: b Via #[blank-link(url='https://www.npmjs.com/') NPM]:
	highlight-code(lang='bash').
		npm install --save vue-github-buttons
	p: b Via #[blank-link(url='https://yarnpkg.com') Yarn]:
	highlight-code(lang='bash').
		yarn add vue-github-buttons
</template>

<script>
import components from '../../components';

export default {
	name: 'Installation',
	components
};
</script>
