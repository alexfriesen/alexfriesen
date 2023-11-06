// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/i18n',
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
	],
	css: ['@/index.css'],
	srcDir: 'src/',
	tailwindcss: {
		config: {
			plugins: [require('@tailwindcss/typography')],
		},
	},
	i18n: {
		locales: ['en', 'de'],
		defaultLocale: 'en',
	},
	content: {
		locales: ['en', 'de'],
		defaultLocale: 'en',
		highlight: {
			// Theme used in all color schemes.
			theme: 'github-dark',
		},
	},
	components: {
		global: true,
		dirs: ['~/components'],
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
					content: 'http://alexfriesen.net/images/sqare300.jpg',
				},
			],
		},
	},
});
