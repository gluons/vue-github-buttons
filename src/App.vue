<template lang="pug">
#app
	github-corner(url='https://github.com/gluons/vue-github-buttons')
	home
</template>

<script>
import components from './components';
import views from './views';

export default {
	components: {
		...components,
		...views
	}
};
</script>
