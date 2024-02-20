<template>
	<nuxt-layout>
		<NuxtPage />
	</nuxt-layout>
</template>

<script setup lang="ts">
defineOgImageComponent('meta-og-image', {
	siteName: 'alexfriesen.net',
	image: 'https://alexfriesen.net/images/me600.jpg',
	imageRound: true,
});
</script>
