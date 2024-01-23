<template>
	<Head>
		<Title>{{ $t('navigation.projects') }}</Title>
		<Link rel="canonical" :href="toAbsoluteUrl($route.fullPath)" />
	</Head>
	<AltLangHead />

	<Content class="flex flex-col gap-4">
		<div class="prose dark:prose-invert">
			<h2 class="text-3xl sm:text-4xl tracking-tight">
				{{ $t('navigation.projects') }}
			</h2>
			<p>{{ $t('projects.intro') }}</p>
		</div>
		<div class="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<ContentList v-slot="{ list }" path="/projects">
				<article
					v-for="article in list.slice().reverse()"
					:key="article._path"
					class="flex flex-col justify-between overflow-hidden rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900"
				>
					<NuxtLink v-if="article.image" :to="article._path || undefined" :aria-label="article.title">
						<img
							v-if="article.image"
							:src="article.image"
							:alt="article.title"
							class="block h-auto w-full object-cover aspect-video"
							loading="lazy"
						>
					</NuxtLink>

					<header class="flex flex-col flex-1 prose dark:prose-invert leading-tight p-2 md:p-4">
						<h3 class="mb-2">
							{{ article.title }}
						</h3>
						<p>
							{{ article.description }}
						</p>
					</header>

					<footer class="flex items-center justify-between leading-none p-2 md:p-4">
						<div class="flex flex-wrap gap-1">
							<UBadge v-for="tag in article.tags" :key="tag" color="amber">
								{{ tag }}
							</UBadge>
						</div>
						<UButton :to="article._path" size="lg" variant="ghost" color="primary">
							<span>{{ $t('projects.more') }}</span>
						</UButton>
					</footer>
				</article>
			</ContentList>
		</div>
	</Content>
</template>

<script setup lang="ts">
const toAbsoluteUrl = useAbsoluteUrl();
</script>
