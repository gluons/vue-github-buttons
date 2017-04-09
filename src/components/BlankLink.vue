<template lang="pug">
a(:href='url', target='_blank', rel='noopener noreferrer')
	slot
</template>

<script>
export default {
	name: 'blank-link',
	props: {
		url: {
			type: String,
			required: true
		}
	}
};
</script>
