<template>
	<div
		class="
			flex
			bg-gray-200
			text-gray-800
			rounded-md
			overflow-hidden
		"
	>
		<NuxtLink
			v-for="lang in availableLanguages"
			:key="lang.locale"
			:to="!isLangRestricted(lang.locale) ? switchLocalePath(lang.locale) : undefined"
			:title="lang.name"
			:class="{ disabled: isLangRestricted(lang.locale) }"
			class="
				inline-flex
				gap-1
				items-center
				justify-evenly
				px-2
				py-1.5
				text-base
				font-medium
				leading-none
				hover:bg-gray-900
				hover:text-gray-200
			"
			active-class="bg-gray-800 text-gray-200"
		>
			<Icon :name="lang.icon" size="22" class="rounded-full border-2 border-current" />
			<span>{{ lang.name }}</span>
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
