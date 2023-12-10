<template>
	<Head>
		<Link
			v-for="lang in $i18n.availableLocales"
			:key="lang"
			rel="alternate"
			:hreflang="lang"
			:href="switchLocalePath(lang)"
		/>
		<Link
			rel="alternate"
			hreflang="x-default"
			:href="switchLocalePath($i18n.defaultLocale)"
		/>
	</Head>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
</script>
