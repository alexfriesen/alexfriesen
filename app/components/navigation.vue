<template>
	<div :class="$attrs.class" class="bg-neutral-50 dark:bg-neutral-800 ring-1 ring-neutral-300 dark:ring-neutral-700">
		<div
			class="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start gap-4 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-16">
			<div class="flex-shrink-0 flex items-center">
				<h1 class="dark:text-white">Alexander Friesen</h1>
			</div>
			<UNavigationMenu :items="menu" orientation="horizontal" content-orientation="vertical"
				class="hidden md:flex justify-between flex-grow" />

			<UButton class="md:hidden" icon="i-lucide-menu" variant="ghost" @click="openMoreMenu = true" />
		</div>

		<USlideover v-model:open="openMoreMenu" title="Menu" side="right">
			<template #body>
				<div class="flex flex-col justify-center h-full">
					<UNavigationMenu :items="menu" orientation="vertical" class="full-w" />
				</div>
			</template>
		</USlideover>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();


const menu = computed(() => ([
	[
		{ label: t('home.title'), to: localePath('/'), icon: 'i-lucide-home' },
		{ label: t('snippets.title'), to: localePath('/snippets'), icon: 'i-lucide-puzzle' },
		{ label: t('projects.title'), to: localePath('/projects'), icon: 'i-lucide-zap' },
	],
	[
		{ label: t('contact.title'), to: localePath('/contact'), icon: 'i-lucide-mail' }
	]
]));

const openMoreMenu = ref(false);

const route = useRoute();
watch(() => route.path, () => {
	openMoreMenu.value = false;
});
</script>
