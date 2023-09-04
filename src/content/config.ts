import { z, defineCollection } from 'astro:content'

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.string(),
  heroImage: z.string()
})

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema
})

export type ProjectSchema = z.infer<typeof projectSchema>

export const collections = {
  projects: projectCollection
}
