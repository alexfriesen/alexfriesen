<template>
	<div>
		<Html :lang="head?.htmlAttrs?.lang" :dir="head?.htmlAttrs?.dir">

		<Head>
			<Title v-if="title">{{ title }}</Title>
			<Meta v-if="description" name="description" :content="description" />
			<Link rel="canonical" :href="toAbsoluteUrl($route.fullPath)" />
			<template v-for="link in head.link" :key="link.id">
				<Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
			</template>
			<template v-for="meta in head.meta" :key="meta.id">
				<Meta :id="meta.id" :property="meta.property" :content="meta.content" />
			</template>
		</Head>

		<Body>
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
							&copy; 2025 - Alexander Friesen
						</p>
					</div>
					<div class="flex items-center gap-4">
						<UButton v-for="link in socialLinks" :key="link.label" :to="link.href" :title="link.label"
							:aria-label="link.label" class="rounded-full p-2.5" type="link" target="_blank"
							variant="solid" color="gray" square>
							<UIcon :name="link.icon" class="w-6 h-6" />
						</UButton>
					</div>
				</Content>
			</footer>
		</Body>

		</Html>
	</div>
</template>

<script setup lang="ts">
const head = useLocaleHead();
const { t } = useI18n();
const route = useRoute();
const toAbsoluteUrl = useAbsoluteUrl();
const title = computed(() => route?.meta?.title ? t(route?.meta?.title as string) : null);
const description = computed(() => route?.meta?.description ? t(route?.meta?.description as string) : null);

const socialLinks = [
	{ label: 'Github', icon: 'i-ri-github-fill', href: 'https://github.com/alexfriesen/' },
	{ label: 'LinkedIn', icon: 'i-ri-linkedin-fill', href: 'https://www.linkedin.com/in/alexander-friesen-420495112' },
	{ label: 'Bluesky', icon: 'i-ri-bluesky-fill', href: 'https://bsky.app/profile/alexfriesen.net' },
];
</script>
