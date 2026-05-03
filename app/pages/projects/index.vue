<template>
	<UPage class="space-y-6">
		<UPageHeader :title="$t('projects.title')" :description="$t('projects.description')" />

		<UPageBody>
			<UPageGrid>
				<UBlogPost
					v-for="article in data"
					:key="article.path"
					:title="article.title"
					:description="article.description"
					:image="article.image"
					:to="article.path"
				>
					<template #footer>
						<footer class="flex flex-wrap items-center gap-1.5 leading-none p-4 sm:p-6">
							<UBadge v-for="tag in article.tags" :key="tag" color="neutral" variant="subtle">
								{{ tag }}
							</UBadge>
						</footer>
					</template>
				</UBlogPost>
			</UPageGrid>
		</UPageBody>
	</UPage>
</template>

<script setup lang="ts">
const route = useRoute();
const { t, locale } = useI18n();
const collection = locale.value === 'en' ? 'projects_en' : 'projects_de';
const { data } = await useAsyncData(route.path, () =>
	queryCollection(collection).order('path', 'DESC').limit(10).all(),
);

useSeoMeta({
	title: t('projects.title'),
	description: t('projects.description'),
});

defineOgImage('Default', {
	title: t('projects.title'),
	description: t('projects.description'),
	image: '/images/me600.jpg',
	imageRound: true,
});
</script>
