// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	experimental: {
		viewTransition: true,
	},
	modules: [
		'nuxt-icon',
		'@nuxtjs/i18n',
		'@nuxtseo/module',
		'nuxt-schema-org',
		'@nuxt/content',
		'@nuxt/image',
		'@nuxt/ui',
	],
	srcDir: 'src/',
	i18n: {
		locales: ['en', 'de'],
		defaultLocale: 'en',
	},
	components: {
		global: true,
		dirs: ['~/components'],
	},
	content: {
		locales: ['en', 'de'],
		defaultLocale: 'en',
		highlight: {
			// Theme used in all color schemes.
			theme: 'github-dark',
		},
	},
	imports: {
		dirs: ['~/composables'],
	},
	site: {
		url: 'https://alexfriesen.net',
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
					content:
						'Software Developer, Full-Stack Developer, Full-Stack, Paderborn',
				},
				{ property: 'og:title', content: 'Alexander Friesen' },
				{
					property: 'og:image',
					content: 'http://alexfriesen.net/images/me600.jpg',
				},
			],
		},
	},
	ui: {
		icons: ['heroicons', 'ri'],
	},
});
