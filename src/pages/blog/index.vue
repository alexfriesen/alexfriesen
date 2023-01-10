<template>
	<Content class="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-6">
		<ContentList v-slot="{ list }" path="/blog">
			<article
				v-for="article in list.slice().reverse()"
				:key="article._path"
				class="flex flex-col justify-between overflow-hidden rounded-lg bg-gray-800 shadow-lg"
				>
				<NuxtLink v-if="article.image" :to="article._path || undefined">
					<img
						v-if="article.image"
						loading="lazy"
						class="block h-auto w-full object-cover aspect-video"
						:alt="article.title"
						:src="article.image"
					>
				</NuxtLink>

				<header class="leading-tight p-2 md:p-4">
					<h2 class="text-grey-darker font-bold text-xl mb-2">
						{{ article.title }}
					</h2>
					<p class="text-gray-300 text-base">
						{{ article.description }}
					</p>
				</header>

				<footer class="flex items-center justify-between leading-none p-2 md:p-4">
					<time class="text-gray-500" :datetime="article.date">
						{{ new Date(article.date).toLocaleDateString() }}
					</time>
					<LinkButton :to="article._path">
						<span>Read</span>
					</LinkButton>
				</footer>
			</article>
		</ContentList>
	</Content>
</template>
