<script setup>
const props = defineProps({
	error: Object,
});

const isDev = import.meta.dev;
const is404 = computed(
	() => props.error?.statusCode === 404 || message.value?.includes('404'),
);
const title = computed(() => (is404.value ? '404.title' : 'error.title'));
const description = computed(() =>
	is404.value ? '404.description' : 'error.description',
);
const message = computed(() => String(props.error?.message || ''));

const { t } = useI18n();
useSeoMeta({
	title: () => t(title.value),
	description: () => t(description.value),
	robots: 'noindex',
});

function handleError() {
	return clearError({ redirect: '/' });
}
</script>

<template>
	<NuxtLayout>
		<UPage>
			<UPageSection
				:title="t(title)"
				:description="t(description)"
				icon="i-lucide-octagon-alert"
				:links="[
					{
						label: $t('actions.back'),
						size: 'xl',
						onClick: handleError,
					},
				]"
			/>
		</UPage>
	</NuxtLayout>
</template>
