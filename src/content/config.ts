import { defineCollection, z } from 'astro:content';

const pizza = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    heroImage: z.string().optional(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard', 'Expert']).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { pizza };
