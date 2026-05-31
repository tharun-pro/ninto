import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fnz75tfn',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'blogs',
  apiVersion: '2021-10-21',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T> {
  return client.fetch<T>(query, params ?? {}, { cache: 'no-store' })
}

export interface SanityPost {
  _id: string
  title: string
  slug: string
  excerpt?: string
  coverImage?: { asset: { _ref: string } }
  author?: string
  category?: string
  publishedAt?: string
  readTime?: number
  postType?: 'patient' | 'clinic'
}

export interface SanityPostFull extends SanityPost {
  subText?: string
  body?: SanityBlock[]
}

export interface SanityBlock {
  _type: string
  _key: string
  style?: string
  children?: Array<{ _type: string; _key: string; text: string; marks: string[] }>
  markDefs?: Array<{ _key: string; _type: string; href?: string }>
  asset?: { _ref: string }
  alt?: string
  caption?: string
}
