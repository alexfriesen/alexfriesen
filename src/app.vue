<template>
	<Head>
		<Html :lang="locale" />
	</Head>
	<header class="shadow">
		<Navigation />
	</header>
	<main>
		<NuxtPage />
	</main>
	<footer>
		<Content class="flex flex-col md:flex-row items-center justify-evenly gap-2">
			<div v-if="!$route.path.startsWith('/projects/')" class="flex gap-2">
				<NuxtLink :to="switchLocalePath('en')" class="inline-flex gap-1 items-center">
					<Icon name="circle-flags:en" />
					English
				</NuxtLink>
				|
				<NuxtLink :to="switchLocalePath('de')" class="inline-flex gap-1 items-center">
					<Icon name="circle-flags:de" />
					Deutsch
				</NuxtLink>
			</div>
			<div>
				<NuxtLink
					class="
						inline-flex
						gap-1
						items-center
						justify-evenly
						px-2
						py-1
						border border-transparent
						text-base
						font-medium
						rounded-md
						text-gray-300
						bg-gray-200
						hover:bg-gray-900
						text-gray-800
						hover:text-gray-200
					"
					to="https://github.com/alexfriesen/"
					target="_blank"
				>
					<Icon name="uil:github" class="w-6 h-6" />
					Github
				</NuxtLink>
			</div>
			<div>
				&copy; 2023 - Alexander Friesen
			</div>
		</Content>
	</footer>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
</script>
