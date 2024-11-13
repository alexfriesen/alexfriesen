<template>
	<Head>
		<Link
			v-for="lang in $i18n.availableLocales"
			:key="lang"
			rel="alternate"
			:hreflang="lang"
			:href="toAbsoluteUrl(switchLocalePath(lang))"
		/>
		<Link
			rel="alternate"
			hreflang="x-default"
			:href="toAbsoluteUrl(switchLocalePath($i18n.defaultLocale))"
		/>
	</Head>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const toAbsoluteUrl = useAbsoluteUrl();
</script>
