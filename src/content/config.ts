import { z, defineCollection } from 'astro:content'

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.string().datetime(),
  heroImage: z.string(),
  images: z
    .object({
      src: z.string(),
      alt: z.string(),
      link: z.string().optional()
    })
    .array()
    .optional()
})

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema
})

export type ProjectSchema = z.infer<typeof projectSchema>

export const collections = {
  projects: projectCollection
}
