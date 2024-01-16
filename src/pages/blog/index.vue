<template>
	<Head>
		<Title>{{ $t('navigation.blog') }}</Title>
		<Link rel="canonical" :href="toAbsoluteUrl($route.fullPath)" />
	</Head>
	<AltLangHead />

	<Content class="flex flex-col gap-4">
		<div class="prose prose-invert">
			<h2 class="text-3xl sm:text-4xl tracking-tight">
				{{ $t('navigation.blog') }}
			</h2>
		</div>
		<div class="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<ContentList v-slot="{ list }" path="/blog">
				<article
					v-for="article in list.slice().reverse()"
					:key="article._path"
					class="flex flex-col justify-between overflow-hidden rounded-lg bg-gray-800 shadow-lg"
				>
					<NuxtLink v-if="article.image" :to="article._path || undefined">
						<img
							v-if="article.image"
							:src="article.image.src"
							:alt="article.image.alt"
							class="block h-auto w-full object-cover aspect-video"
							loading="lazy"
						>
					</NuxtLink>

					<header class="leading-tight p-2 md:p-4">
						<h3 class="text-grey-darker font-bold text-xl mb-2">
							{{ article.title }}
						</h3>
						<p class="text-gray-300 text-base">
							{{ article.description }}
						</p>
					</header>

					<footer class="flex items-center justify-between leading-none p-2 md:p-4">
						<div>
							<time v-if="article.date" class="text-gray-500" :datetime="article.date">
								{{ new Date(article.date).toLocaleDateString() }}
							</time>
						</div>
						<LinkButton :url="article._path">
							<span>{{ $t('blog.read') }}</span>
						</LinkButton>
					</footer>
				</article>
			</ContentList>
		</div>
	</Content>
</template>

<script setup lang="ts">
const toAbsoluteUrl = useAbsoluteUrl();
</script>
