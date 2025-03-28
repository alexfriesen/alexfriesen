import { defineCollection, defineContentConfig, z } from '@nuxt/content';
import { asSitemapCollection } from '@nuxtjs/sitemap/content';

const snippetsSchema = z.object({
	tags: z.array(z.string()),
	date: z.coerce.date(),
});

const blogSchema = z.object({
	image: z.object({
		src: z.string(),
		alt: z.string(),
	}),
	tags: z.array(z.string()),
	date: z.coerce.date(),
});

const projectSchema = z.object({
	tags: z.array(z.string()),
	image: z.string(),
});

export default defineContentConfig({
	collections: {
		snippets_en: defineCollection(
			asSitemapCollection({
				source: 'en/snippets/*.md',
				type: 'page',
				schema: snippetsSchema,
			})
		),
		snippets_de: defineCollection(
			asSitemapCollection({
				source: 'de/snippets/*.md',
				type: 'page',
				schema: snippetsSchema,
			})
		),

		blog_en: defineCollection({
			source: 'en/blog/*.md',
			type: 'page',
			schema: blogSchema,
		}),
		blog_de: defineCollection({
			source: 'de/blog/*.md',
			type: 'page',
			schema: blogSchema,
		}),

		projects_en: defineCollection(
			asSitemapCollection({
				source: 'en/projects/*.md',
				type: 'page',
				schema: projectSchema,
			})
		),
		projects_de: defineCollection(
			asSitemapCollection({
				source: 'de/projects/*.md',
				type: 'page',
				schema: projectSchema,
			})
		),
	},
});
