// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-09-18',
	future: {
		compatibilityVersion: 4,
	},
	experimental: {
		viewTransition: true,
	},
	modules: [
		'@nuxt/eslint',
		'@nuxt/icon',
		'@nuxtjs/seo',
		'@nuxtjs/i18n',
		'nuxt-og-image',
		'nuxt-schema-org',
		'@nuxt/content',
		'@nuxt/image',
		'@nuxt/ui',
	],
	i18n: {
		locales: ['en', 'de'],
		defaultLocale: 'en',
	},
	components: {
		dirs: ['~/components'],
		global: true,
	},
	content: {
		locales: ['en', 'de'],
		defaultLocale: 'en',
		highlight: {
			// Theme used in all color schemes.
			theme: 'github-dark',
		},
	},
	icon: {
		clientBundle: {
			scan: true,
		},
	},
	site: {
		url: 'https://alexfriesen.net',
	},
	devtools: {
		enabled: true,
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1.0',
			titleTemplate: '%s - Alex Friesen',
			title: 'Home',
			meta: [
				{ name: 'theme-color', content: '#4c7f7f' },
				{
					name: 'description',
					content: 'Alexander Friesen - Software Developer',
				},
				{
					name: 'keywords',
					content: 'Software Developer, Full-Stack Developer, Full-Stack',
				},
			],
		},
	},
});
