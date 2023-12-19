<template>
	<div
		v-if="currentLanguage"
		class="
			inline-flex
			gap-1
			items-center
			justify-evenly
			px-2
			py-1
			border
			border-transparent
			text-base
			font-medium
			rounded-md
			text-gray-300
			bg-gray-200
			text-gray-800
			cursor-pointer
			relative
		"
		@click="open = !open"
		@mouseleave="open = false"
	>
		<Icon :name="currentLanguage.icon" />
		{{ currentLanguage.name }}
		<Icon v-if="!isRestricted" name="uil:angle-down" />

		<div
			v-if="open && !isRestricted"
			class="
				absolute
				top-8
				right-0
				bg-gray-200
				text-gray-800
				rounded-md
				overflow-hidden
			"
		>
			<div class="flex flex-col">
				<NuxtLink
					v-for="lang in availableLanguages"
					:key="lang.locale"
					:to="switchLocalePath(lang.locale)"
					class="inline-flex gap-2 px-4 py-1 items-center hover:bg-gray-900 hover:text-gray-200"
				>
					<Icon :name="lang.icon" />
					{{ lang.name }}
				</NuxtLink>
			</div>
		</div>
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
	'/blog/',
	'/projects/',
];

const isRestricted = computed(() => {
	const currentPath = useRoute().path;
	return restrictedPaths.some(path => currentPath.startsWith(path));
});

const currentLanguage = computed(() => {
	const locale = useI18n().locale.value;
	const current = availableLanguages.find(lang => lang.locale === locale);
	return current;
});

const switchLocalePath = useSwitchLocalePath();

const open = ref(false);
</script>
