import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content'; 
import { z } from 'zod'; // <--- Hier angepasst

const works = defineCollection({
    loader: glob({ base: "./src/content", pattern: "**/*.md" }),
    schema: ({image}) => z.object({
        title: z.string().max(50),
        slug: z.string(),
        info: z.string().max(50).optional(),
        category: z.enum(["UI/UX Design", "Web Design", "Art Direction", "Product Design", "Branding", "Scoring", "Credits", "Info", "Contact"]),
        year: z.string().max(4).optional(),
        featuredImage: image(),
        imageTwo: image().optional(),
        imageThree: image().optional(),
        imageFour: image().optional(),
        imageFive: image().optional(),
        imageSix: image().optional(),
        liveSite: z.url().optional(),
        description: z.string().max(350),
        isFeatured: z.boolean(),
        isDraft: z.boolean(),
        youtubeVideoId: z.string().optional()
    })
});

export const collections = { works };