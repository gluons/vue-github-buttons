<template lang="pug">
#app
	github-corners(repo='gluons/vue-github-buttons')
	home
</template>

<script>
import components from './components';
import views from './views';

export default {
	name: 'App',
	components: {
		...components,
		...views
	}
};
</script>
