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
			<LangToggle />
			<div>
				&copy; 2023 - Alexander Friesen
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
					to="https://github.com/alexfriesen/"
					target="_blank"
				>
					<Icon name="uil:github" class="w-6 h-6" />
					Github
				</NuxtLink>
			</div>
		</Content>
	</footer>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
