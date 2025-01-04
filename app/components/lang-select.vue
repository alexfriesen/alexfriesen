<template>
	<USelectMenu
		class="min-w-36"
		:model-value="locale"
		:options="availableLanguages"
		value-attribute="value"
		color="gray"
	>
		<template #label>
			<Icon :name="selected.icon" class="w-6 h-6" />
			<span>{{ selected.name }}</span>
		</template>

		<template #option="{ option: lang }">
			<NuxtLink :to="switchLocalePath(lang.value)" class="inline-flex items-center gap-x-1.5">
				<Icon :name="lang.icon" class="w-6 h-6" />
				<span>{{ lang.name }}</span>
			</NuxtLink>
		</template>
	</USelectMenu>
</template>

<script setup lang="ts">
const locale = useI18n().locale;
const selected = computed(() => {
	const currentLocale = locale.value;
	const lang = availableLanguages.find(lang => lang.value === currentLocale);
	return lang || availableLanguages[0]!;
});

const availableLanguages = [{
	value: 'en',
	name: 'English',
	icon: 'circle-flags:en',
}, {
	value: 'de',
	name: 'Deutsch',
	icon: 'circle-flags:de',
}];

const switchLocalePath = useSwitchLocalePath();
</script>
