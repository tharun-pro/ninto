export const allPostsQuery = `
  *[_type == "post" && defined(slug.current) && defined(coverImage.asset)] | order(publishedAt desc) {
    _id, title, "slug": slug.current, excerpt, coverImage,
    "author": author->name, "category": category->title,
    publishedAt, readTime, postType
  }
`

export const relatedPostsQuery = `
  *[_type == "post" && slug.current != $slug && defined(slug.current) && defined(coverImage.asset)]
  | order(publishedAt desc) [0...3] {
    _id, title, "slug": slug.current, excerpt, coverImage,
    "category": category->title, postType
  }
`

export const clinicPostsQuery = `
  *[_type == "post" && postType == "clinic" && defined(slug.current) && defined(coverImage.asset)] | order(publishedAt desc) {
    _id, title, "slug": slug.current, excerpt, coverImage,
    "author": author->name, "category": category->title,
    publishedAt, readTime
  }
`

export const patientPostsQuery = `
  *[_type == "post" && postType == "patient" && defined(slug.current) && defined(coverImage.asset)] | order(publishedAt desc) {
    _id, title, "slug": slug.current, excerpt, coverImage,
    "author": author->name, "category": category->title,
    publishedAt, readTime
  }
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    title, "slug": slug.current, excerpt, subText, coverImage,
    "author": author->name, publishedAt, readTime,
    "category": category->title, body
  }
`

export const relatedClinicPostsQuery = `
  *[_type == "post" && postType == "clinic" && slug.current != $slug && defined(slug.current) && defined(coverImage.asset)]
  | order(publishedAt desc) [0...3] {
    _id, title, "slug": slug.current, excerpt, coverImage
  }
`

export const relatedPatientPostsQuery = `
  *[_type == "post" && postType == "patient" && slug.current != $slug && defined(slug.current) && defined(coverImage.asset)]
  | order(publishedAt desc) [0...3] {
    _id, title, "slug": slug.current, excerpt, coverImage
  }
`

export const clinicPostSlugsQuery = `
  *[_type == "post" && postType == "clinic"] { "slug": slug.current }
`

export const patientPostSlugsQuery = `
  *[_type == "post" && postType == "patient"] { "slug": slug.current }
`

export const recentClinicPostsQuery = `
  *[_type == "post" && postType == "clinic" && defined(slug.current) && defined(coverImage.asset)] | order(publishedAt desc) [0...3] {
    _id, title, "slug": slug.current, excerpt, coverImage,
    "category": category->title, postType
  }
`

export const recentPatientPostsQuery = `
  *[_type == "post" && postType == "patient" && defined(slug.current) && defined(coverImage.asset)] | order(publishedAt desc) [0...3] {
    _id, title, "slug": slug.current, excerpt, coverImage,
    "category": category->title, postType
  }
`

export const recentAllPostsQuery = `
  *[_type == "post" && defined(slug.current) && defined(coverImage.asset)] | order(publishedAt desc) [0...3] {
    _id, title, "slug": slug.current, excerpt, coverImage,
    "category": category->title, postType
  }
`
