const baseUrl = 'https://alexfriesen.net';

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
		'@nuxtjs/seo',
		'@nuxtjs/i18n',
		'nuxt-og-image',
		'nuxt-schema-org',
		'@nuxt/content',
		'@nuxt/image',
		'@nuxt/ui',
	],
	css: ['~/assets/css/main.css'],
	content: {},
	i18n: {
		baseUrl: baseUrl,
		strategy: 'prefix',
		detectBrowserLanguage: {
			redirectOn: 'no prefix',
			useCookie: false,
		},
		locales: [
			{
				code: 'en',
				language: 'en-US',
			},
			{
				code: 'de',
				language: 'de-DE',
			},
		],
		defaultLocale: 'en',
	},
	nitro: {
		static: true,
	},
	icon: {
		clientBundle: {
			scan: true,
		},
	},
	site: {
		url: baseUrl,
		name: 'Alexander Friesen',
	},
	devtools: {
		enabled: true,
	},
	app: {
		head: {
			viewport: 'width=device-width, initial-scale=1.0',
			titleTemplate: '%s - Alexander Friesen',
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
						'Alexander Friesen, Alex Friesen, Webdeveloper, Software Developer, Full-Stack Developer, Full-Stack, IT',
				},
			],
		},
	},
});
