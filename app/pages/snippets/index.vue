<template>
	<Content class="flex flex-col gap-4">
		<div class="prose dark:prose-invert">
			<h2 class="text-3xl sm:text-4xl tracking-tight">
				{{ $t('snippets.title') }}
			</h2>
			<p>{{ $t('snippets.description') }}</p>
		</div>
		<div class="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<article v-for="article in data" :key="article.path"
				class="flex flex-col justify-between overflow-hidden rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900">
				<header class="flex flex-col flex-1 prose dark:prose-invert leading-tight p-2 md:p-4 ">
					<h3 class="mb-2">
						<NuxtLink :to="article.path" :aria-label="article.title" class="no-underline">
							{{ article.title }}
						</NuxtLink>
					</h3>
					<p>
						{{ article.description }}
					</p>
				</header>

				<footer class="flex items-center justify-between leading-none p-2 md:p-4">
					<div class="flex flex-wrap gap-1">
						<UBadge v-for="tag in article.tags" :key="tag" color="gray" variant="subtle">
							{{ tag }}
						</UBadge>
					</div>
					<UButton :to="article.path" :aria-label="article.title" size="lg" variant="ghost" color="primary">
						<span>{{ $t('snippets.read') }}</span>
					</UButton>
				</footer>
			</article>
		</div>
	</Content>
</template>

<script setup lang="ts">

const route = useRoute()
const { locale } = useI18n()
const collection = locale.value === 'en' ? 'snippets_en' : 'snippets_de'
const { data } = await useAsyncData(route.path, () => queryCollection(collection)
	.order('date', 'DESC')
	.limit(10)
	.all()
)
definePageMeta({
	title: 'snippets.title',
	description: 'snippets.description',
})
</script>
