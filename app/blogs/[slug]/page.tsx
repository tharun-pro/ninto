import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { postBySlugQuery, relatedPatientPostsQuery, patientPostSlugsQuery } from '@/lib/queries'
import type { SanityPostFull, SanityPost } from '@/lib/sanity'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  try {
    const slugs = await sanityFetch<{ slug: string }[]>(patientPostSlugsQuery)
    return slugs.map((s) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await sanityFetch<SanityPostFull>(postBySlugQuery, { slug: params.slug })
    if (!post) return { title: 'Blog — Ninto' }
    return {
      title: `${post.title} — Ninto`,
      description: post.excerpt,
    }
  } catch {
    return { title: 'Blog — Ninto' }
  }
}

function renderBody(body: any[]): React.ReactNode {
  if (!body?.length) return null
  return body.map((block: any, i: number) => {
    if (block._type === 'block') {
      const text = block.children?.map((c: any) => c.text).join('') ?? ''
      if (block.style === 'h2') return <h2 className="art-section-title" key={i}>{text}</h2>
      if (block.style === 'h3') return <h3 key={i} style={{fontSize:20,fontWeight:500,margin:'0 0 8px'}}>{text}</h3>
      if (block.style === 'blockquote') return <blockquote key={i} style={{borderLeft:'3px solid #00a000',paddingLeft:16,color:'#4e4e4e',fontStyle:'italic',margin:'16px 0'}}>{text}</blockquote>
      return <p className="art-section-body" key={i}>{text}</p>
    }
    if (block._type === 'image' && block.asset) {
      return <img key={i} src={urlFor(block).width(800).url()} alt={block.alt ?? ''} style={{width:'100%',borderRadius:8,margin:'24px 0'}} />
    }
    return null
  })
}

export default async function BlogDetailPage({ params }: Props) {
  let post: SanityPostFull | null = null
  let related: SanityPost[] = []

  try {
    post = await sanityFetch<SanityPostFull>(postBySlugQuery, { slug: params.slug })
    related = await sanityFetch<SanityPost[]>(relatedPatientPostsQuery, { slug: params.slug })
  } catch {}

  if (!post) notFound()

  const coverUrl = post.coverImage ? urlFor(post.coverImage).width(1200).height(600).url() : null

  return (
    <>
      <NavPatient />
      <SiteEffects />

      <article className="art-wrap">
        <div className="art-hero">
          {coverUrl && (
            <div className="art-hero-img">
              <img src={coverUrl} alt={post.title} />
            </div>
          )}
          <div className="art-hero-content">
            <h1 className="art-title">{post.title}</h1>
            {post.excerpt && <p className="art-subtitle">{post.excerpt}</p>}
            <div className="art-meta">
              {post.author && <span>{post.author}</span>}
              {post.publishedAt && (
                <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              )}
              {post.readTime && <span>{post.readTime} min read</span>}
            </div>
          </div>
        </div>

        <div className="art-body">
          {post.body ? (
            <div className="art-section">
              {renderBody(post.body)}
            </div>
          ) : (
            <div className="art-section">
              <p className="art-section-body">Content coming soon.</p>
            </div>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="bl-grid-section">
          <div className="bl-grid-header">
            <p className="bl-grid-label">more insights</p>
            <h2 className="bl-grid-title">More blogs <span className="green">for you</span></h2>
          </div>
          <div className="bl-posts-grid">
            {related.map((r) => (
              <Link href={`/blogs/${r.slug}`} key={r._id} className="bl-card">
                <div className="bl-card-img">
                  {r.coverImage ? (
                    <img src={urlFor(r.coverImage).width(600).height(450).url()} alt={r.title} />
                  ) : (
                    <img src="/blog-thumb-bg.png" alt="" />
                  )}
                  <div className="bl-card-overlay" />
                </div>
                <div className="bl-card-arrow" aria-hidden="true"><i className="ti ti-arrow-up-right" /></div>
                <div className="bl-card-body">
                  {r.category && <span className="bl-card-tag">{r.category}</span>}
                  <h3 className="bl-card-title">{r.title}</h3>
                  {r.excerpt && <p className="bl-card-desc">{r.excerpt}</p>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <FooterPatient />
    </>
  )
}
