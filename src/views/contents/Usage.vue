<template lang="pug">
#usage
	h2 Usage
	highlight-code(lang='javascript')
		include ../usage-codes/main.js
	highlight-code(lang='html')
		include:escape-html ../usage-codes/component.vue
</template>

<script>
import components from '../../components';

export default {
	name: 'Usage',
	components
};
</script>
