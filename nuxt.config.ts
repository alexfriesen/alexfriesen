// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon'],
	css: ['@/index.css'],
	srcDir: 'src/',
	content: {
		highlight: {
			// Theme used in all color schemes.
			theme: 'github-dark',
		},
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1.0',
			title: 'Alex Friesen - Homepage',
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
