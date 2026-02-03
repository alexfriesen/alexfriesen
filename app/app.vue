<script setup lang="ts">
import { en, de } from '@nuxt/ui/locale';

const locales = {
	en,
	de,
};

const { locale } = useI18n();

const uiLocale = computed(() => {
	return locales[locale.value] || de;
});

const lang = computed(() => uiLocale.value.code);
const dir = computed(() => uiLocale.value.dir);

useHead({
	htmlAttrs: {
		lang,
		dir,
	},
});

defineOgImageComponent('MetaOgImage', {
	siteName: 'alexfriesen.net',
	image: '/images/me600.jpg',
	imageRound: true,
});
</script>

<template>
	<UApp :locale="uiLocale">
		<NuxtLoadingIndicator color="var(--ui-primary)" />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
