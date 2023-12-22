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
		<Content class="flex flex-col md:flex-row items-start justify-evenly gap-2">
			<LangToggle />
			<div>
				<p class="text-base py-1">
					&copy; 2023 - Alexander Friesen
				</p>
			</div>
			<div class="flex flex-col gap-1">
				<NuxtLink
					v-for="link in socialLinks"
					class="
						inline-flex
						gap-1
						items-center
						justify-evenly
						px-2
						py-1
						border
						border-transparent
						text-base
						font-medium
						leading-none
						rounded-md
						text-gray-300
						bg-gray-200
						hover:bg-gray-900
						text-gray-800
						hover:text-gray-200
					"
					:to="link.href"
					target="_blank"
				>
					<Icon :name="link.icon" class="w-6 h-6" />
					{{ link.label }}
				</NuxtLink>
			</div>
		</Content>
	</footer>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const socialLinks = [
	{ label: 'Github', icon: 'uil:github', href: "https://github.com/alexfriesen/" },
	{ label: 'LinkedIn', icon: 'uil:linkedin', href: "https://www.linkedin.com/in/alexander-friesen-420495112" }
]
</script>
