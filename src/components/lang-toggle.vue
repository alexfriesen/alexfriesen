<template>
	<div
		class="
			flex
			bg-gray-200
			text-gray-800
			overflow-hidden
			rounded-md
		"
	>
		<NuxtLink
			v-for="lang in availableLanguages"
			:key="lang.locale"
			:to="!isLangRestricted(lang.locale) ? switchLocalePath(lang.locale) : undefined"
			:title="lang.name"
			:class="{ disabled: isLangRestricted(lang.locale) }"
			active-class="bg-gray-800"
			class="flex p-2 items-center hover:bg-gray-900 disabled:opacity-50"
		>
			<Icon :name="lang.icon" size="18" />
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
const availableLanguages = [{
	locale: 'en',
	name: 'English',
	icon: 'circle-flags:en',
}, {
	locale: 'de',
	name: 'Deutsch',
	icon: 'circle-flags:de',
}];

const restrictedPaths = [
	'/projects/',
];

function isLangRestricted(lang: string) {
	const currentPath = useRoute().path;
	const isRestricted = restrictedPaths.some(path => currentPath.startsWith(path));
	const isCurrentLang = useI18n().locale.value === lang;
	return !isCurrentLang && isRestricted;
}

const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped>
.disabled {
	pointer-events: none;
	@apply opacity-50;
}
</style>
