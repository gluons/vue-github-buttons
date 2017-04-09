<template lang="pug">
span.emoji.octocat(src='../assets/octocat.png', width='20', height='20', align='absmiddle', alt=':octocat:')
</template>

<script>
export default {
	name: 'octocat'
};
</script>

<style scoped>
.emoji.octocat {
	display: inline-block;
	background-image: url('../assets/octocat.png');
	background-color: transparent;
	background-position: center bottom;
	background-size: contain;
	background-repeat: no-repeat;
}
</style>
