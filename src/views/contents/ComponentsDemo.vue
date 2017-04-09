<template lang="pug">
#components-demo
	h2 Components & Demo
	.component-demo-container
		h3 Watch button
		p
			gh-btns-watch(slug='vuejs/vue' show-count)
		highlight-code(lang='html')='<gh-btns-watch slug="vuejs/vue" show-count></gh-btns-watch>'
	.component-demo-container
		h3 Star button
		p
			gh-btns-star(slug='vuejs/vue' show-count)
		highlight-code(lang='html')='<gh-btns-star slug="vuejs/vue" show-count></gh-btns-star>'
	.component-demo-container
		h3 Fork button
		p
			gh-btns-fork(slug='vuejs/vue' show-count)
		highlight-code(lang='html')='<gh-btns-fork slug="vuejs/vue" show-count></gh-btns-fork>'
	.component-demo-container
		h3 Follow button
		p
			gh-btns-follow(user='yyx990803' show-count)
		highlight-code(lang='html')='<gh-btns-follow user="yyx990803" show-count></gh-btns-follow>'
</template>

<script>
import components from '../../components';

export default {
	name: 'components-demo',
	components
};
</script>

<style>
.component-demo-container {
	margin: 2rem 0;
}
</style>
