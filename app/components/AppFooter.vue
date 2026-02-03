<script setup lang="ts">
const socialLinks = [
	{
		label: 'Github',
		icon: 'i-ri-github-fill',
		href: 'https://github.com/alexfriesen/',
	},
	{
		label: 'LinkedIn',
		icon: 'i-ri-linkedin-fill',
		href: 'https://www.linkedin.com/in/alexander-friesen-420495112',
	},
	{
		label: 'Bluesky',
		icon: 'i-ri-bluesky-fill',
		href: 'https://bsky.app/profile/alexfriesen.net',
	},
];
</script>

<template>
	<footer
		class="flex flex-col md:flex-row items-center justify-evenly gap-2 py-6 sm:px-6 lg:px-8"
	>
		<div class="flex items-center gap-4">
			<UColorModeSwitch size="xl" />
			<LangSelect />
		</div>
		<div>
			<p class="text-base p-2">&copy; 2025 - Alexander Friesen</p>
		</div>
		<div class="flex items-center gap-4">
			<UButton
				v-for="link in socialLinks"
				:key="link.label"
				:to="link.href"
				:title="link.label"
				:aria-label="link.label"
				class="rounded-full p-2.5"
				target="_blank"
				variant="outline"
				color="neutral"
				square
			>
				<UIcon :name="link.icon" class="w-6 h-6" />
			</UButton>
		</div>
	</footer>
</template>
