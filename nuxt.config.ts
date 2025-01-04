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
		'@nuxt/icon',
		'@nuxtjs/seo',
		'@nuxtjs/i18n',
		'nuxt-og-image',
		'nuxt-schema-org',
		'@nuxt/content',
		'@nuxt/image',
		'@nuxt/ui',
	],

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
	i18n: {
		baseUrl: baseUrl,
		strategy: 'prefix_and_default',
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
		prerender: {
			routes: ['/en', '/de'],
		},
	},
	icon: {
		clientBundle: {
			scan: true,
		},
	},
	site: {
		url: baseUrl,
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
					content:
						'Webdeveloper, Software Developer, Full-Stack Developer, Full-Stack',
				},
			],
		},
	},
});
