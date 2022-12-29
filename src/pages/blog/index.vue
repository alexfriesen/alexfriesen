<template>
	<Content class="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-6">
		<ContentList path="/blog" v-slot="{ list }">
			<article v-for="article in list" :key="article._path"
				class="flex flex-col justify-between overflow-hidden rounded-lg bg-gray-800 shadow-lg">
				<NuxtLink v-if="article.image" :to="article._path || undefined">
					<img v-if="article.image" class="block h-auto w-full object-cover" loading="lazy" :alt="article.title"
						:src="article.image">
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
						<span>Open</span>
					</LinkButton>
				</footer>
			</article>
		</ContentList>

		<article v-for="item in items" :key="item.title"
			class="flex flex-col justify-between overflow-hidden rounded-lg bg-gray-800 shadow-lg">
			<a v-if="item.img" :href="item.url || undefined">
				<img v-if="item.img" class="block h-auto w-full object-cover" loading="lazy" :alt="item.title" :src="item.img">
			</a>

			<header class="leading-tight p-2 md:p-4">
				<h2 class="text-grey-darker font-bold text-xl mb-2">
					{{ item.title }}
				</h2>
				<p class="text-gray-300 text-base">
					{{ item.short }}
				</p>
			</header>

			<footer class="flex items-center justify-between leading-none p-2 md:p-4">
				<time class="text-gray-500" :datetime="item.date">
					{{ new Date(item.date).toLocaleDateString() }}
				</time>
				<LinkButton v-if="item.url" target="_blank" :href="item.url">
					<span>Open</span>
					<ArrowTopRightOnSquareIcon class="inline w-6 h-6" />
				</LinkButton>
			</footer>
		</article>
	</Content>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
import Content from '../../components/content.vue';
import LinkButton from '../../components/link-button.vue';

const items = [
	{
		title: 'Website Refactoring',
		short: 'I rebuild this website again... This time I tryied out Vue, Vite and Tailwind. ',
		date: '04.26.2021 12:00',
		url: null,
		img: '/images/refactor.png',
	},
	{
		title: 'Mutiny - Core Game',
		short: 'Recently I played around with Core and made a small Capture the Flag Map.',
		date: '11.11.2020 20:00',
		url: 'https://www.coregames.com/games/e93347/mutiny',
		img: 'https://manticoreprod.azureedge.net/screenshots/e933477adb104dde805e61c1e313fad0_0_1zZB5IHaEDWpug6HDuha6u_F05A65A64F46D0FD5D5A799C74560B3B3955348F.jpg',
	},
	{
		title: 'Hello World',
		short: 'Hi guys! In this blog I will be posting my Coding Adventures, stay tuned for more!',
		date: '11.11.2020 20:00',
		url: null,
		img: null,
	},
];
</script>
