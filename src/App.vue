<template lang="pug">
#app
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
