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
	content: {
		experimental: {
			nativeSqlite: true,
		},
	},
	i18n: {
		baseUrl: baseUrl,
		strategy: 'prefix_and_default',
		detectBrowserLanguage: {
			redirectOn: 'root',
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
		bundle: {
			optimizeTranslationDirective: false,
		},
	},
	routeRules: {
		'**/blog': { redirect: '/' },
		'/blog': { robots: 'noindex, nofollow', sitemap: false },
		'/not-found': { robots: 'noindex', sitemap: false },
	},
	nitro: {
		static: true,
		prerender: {
			routes: ['/'],
		},
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
	robots: {
		enabled: true,
		allow: ['*'],
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
