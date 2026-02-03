<script setup lang="ts">
const route = useRoute();
const { locale } = useI18n();
const collection = locale.value === 'en' ? 'snippets_en' : 'snippets_de';
const { data } = await useAsyncData(route.path, () =>
	queryCollection(collection).order('date', 'DESC').limit(10).all(),
);
const { t } = useI18n();
useSeoMeta({
	title: t('snippets.title'),
	description: t('snippets.description'),
});
</script>

<template>
	<UPage class="space-y-6">
		<UPageHeader
			:title="$t('snippets.title')"
			:description="$t('snippets.description')"
		/>

		<UPageBody>
			<UPageGrid>
				<UPageCard
					v-for="article in data"
					:key="article.path"
					:title="article.title"
					:description="article.description"
					:to="article.path"
					as="article"
				>
					<footer class="flex flex-wrap items-center gap-1.5 leading-none pt-2">
						<UBadge
							v-for="tag in article.tags"
							:key="tag"
							color="neutral"
							variant="subtle"
						>
							{{ tag }}
						</UBadge>
					</footer>
				</UPageCard>
			</UPageGrid>
		</UPageBody>
	</UPage>
</template>
