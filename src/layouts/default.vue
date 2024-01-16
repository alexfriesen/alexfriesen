<template>
	<Head>
		<Html :lang="locale" />
	</Head>
	<header class="shadow">
		<Navigation />
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<Content class="flex flex-col md:flex-row items-center md:items-start justify-evenly gap-2">
			<LangToggle />
			<div>
				<p class="text-base py-1">
					&copy; 2024 - Alexander Friesen
				</p>
			</div>
			<div class="flex gap-4">
				<NuxtLink
					v-for="link in socialLinks"
					:key="link.label"
					:to="link.href"
					:title="link.label"
					target="_blank"
					class="
						items-center
						justify-center
						p-2
						border
						border-transparent
						text-base
						leading-none
						rounded-full
						text-gray-300
						bg-gray-200
						hover:bg-gray-900
						text-gray-800
						hover:text-gray-200
					"
				>
					<Icon :name="link.icon" class="w-6 h-6" />
				</NuxtLink>
			</div>
		</Content>
	</footer>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const socialLinks = [
	{ label: 'Github', icon: 'uil:github', href: 'https://github.com/alexfriesen/' },
	{ label: 'LinkedIn', icon: 'uil:linkedin', href: 'https://www.linkedin.com/in/alexander-friesen-420495112' }
];
</script>
