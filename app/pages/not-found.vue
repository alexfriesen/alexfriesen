<template>
	<UPage>
		<UPageSection
			:title="t('404.title')"
			:description="$t('404.description')"
			icon="i-lucide-triangle-alert"
			:links="[
				{
					label: $t('actions.back'),
					icon: 'i-lucide-arrow-left',
					to: $localePath('/'),
				},
			]"
		/>
	</UPage>
</template>

<script setup lang="ts">
const { t } = useI18n();
useSeoMeta({
	title: t('404.title'),
	description: t('404.description'),
	robots: 'noindex',
});
</script>
