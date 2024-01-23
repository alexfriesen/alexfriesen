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
		<Content class="flex flex-col md:flex-row items-center justify-evenly gap-2">
			<LangSelect />
			<div>
				<p class="text-base p-2">
					&copy; 2024 - Alexander Friesen
				</p>
			</div>
			<div class="flex items-center gap-4">
				<UButton
					v-for="link in socialLinks"
					:key="link.label"
					:to="link.href"
					:title="link.label"
					:aria-label="link.label"
					class="rounded-full p-2.5"
					type="link"
					target="_blank"
					variant="solid"
					color="gray"
					square
				>
					<UIcon :name="link.icon" class="w-6 h-6" />
				</UButton>
			</div>
		</Content>
	</footer>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const socialLinks = [
	{ label: 'Github', icon: 'i-ri-github-fill', href: 'https://github.com/alexfriesen/' },
	{ label: 'LinkedIn', icon: 'i-ri-linkedin-fill', href: 'https://www.linkedin.com/in/alexander-friesen-420495112' }
];
</script>
