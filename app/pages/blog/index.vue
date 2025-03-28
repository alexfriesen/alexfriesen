<template>
	<Content class="flex flex-col gap-4">
		<div class="prose dark:prose-invert">
			<h2 class="text-3xl sm:text-4xl tracking-tight">
				{{ $t('blog.title') }}
			</h2>
			<p>{{ $t('blog.description') }}</p>
		</div>
		<div class="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<article v-for="article in data" :key="article.path"
				class="flex flex-col justify-between overflow-hidden rounded-lg divide-y divide-neutral-200 dark:divide-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-800 shadow bg-white dark:bg-neutral-900">
				<NuxtLink v-if="article.image" :to="article.path" :aria-label="article.title">
					<img v-if="article.image" :src="article.image.src" :alt="article.image.alt"
						class="block h-auto w-full object-cover aspect-video" loading="lazy">
				</NuxtLink>

				<header class="flex flex-col flex-1 prose dark:prose-invert leading-tight p-2 md:p-4 ">
					<h3 class="mb-2">
						{{ article.title }}
					</h3>
					<p>
						{{ article.description }}
					</p>
				</header>

				<footer class="flex items-center justify-between leading-none p-2 md:p-4">
					<div>
						<time v-if="article.date" class="text-neutral-400 dark:text-neutral-500"
							:datetime="new Date(article.date).toISOString()">
							{{ new Date(article.date).toLocaleDateString() }}
						</time>
					</div>
					<UButton :to="article.path" :aria-label="article.title" size="lg" variant="ghost" color="primary">
						<span>{{ $t('blog.read') }}</span>
					</UButton>
				</footer>
			</article>
		</div>
	</Content>
</template>

<script setup lang="ts">

const route = useRoute()
const { locale } = useI18n()
const collection = locale.value === 'en' ? 'blog_en' : 'blog_de'
const { data } = await useAsyncData(route.path, () => queryCollection(collection)
	.order('date', 'DESC')
	.limit(10)
	.all()
)
definePageMeta({
	title: 'blog.title',
	description: 'blog.description',
})
useSeoMeta({
	robots: 'noindex',
})
</script>
