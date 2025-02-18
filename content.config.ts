import { defineCollection, defineContentConfig, z } from '@nuxt/content';

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

		projects_en: defineCollection({
			source: 'en/projects/*.md',
			type: 'page',
			schema: projectSchema,
		}),
		projects_de: defineCollection({
			source: 'de/projects/*.md',
			type: 'page',
			schema: projectSchema,
		}),
	},
});
