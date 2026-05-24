import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { postBySlugQuery, relatedPostsQuery, patientPostSlugsQuery } from '@/lib/queries'
import type { SanityPostFull, SanityPost } from '@/lib/sanity'

export const dynamic = 'force-dynamic'

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

  const sections: any[][] = []
  let current: any[] = []
  for (const block of body) {
    if (block._type === 'block' && block.style === 'h2' && current.length > 0) {
      sections.push(current)
      current = [block]
    } else {
      current.push(block)
    }
  }
  if (current.length > 0) sections.push(current)

  return (
    <div style={{display:'flex', flexDirection:'column', gap:40}}>
      {sections.map((section, si) => (
        <div key={si} style={{padding:'24px 0'}}>
          {section.map((block: any, i: number) => {
            if (block._type === 'block') {
              const text = block.children?.map((c: any) => c.text).join('') ?? ''
              if (block.style === 'h2') return <h2 className="art-section-title" key={i} style={{marginBottom:40}}>{text}</h2>
              if (block.style === 'h3') return <h3 key={i} style={{fontSize:20,fontWeight:500,margin:'40px 0 8px'}}>{text}</h3>
              if (block.style === 'blockquote') return <blockquote key={i} style={{borderLeft:'3px solid #00a000',paddingLeft:16,color:'#4e4e4e',fontStyle:'italic',margin:'16px 0'}}>{text}</blockquote>
              return <p className="art-section-body" key={i}>{text}</p>
            }
            if (block._type === 'image' && block.asset) {
              return <img key={i} src={urlFor(block).width(800).url()} alt={block.alt ?? ''} style={{width:'100%',borderRadius:8,margin:'24px 0'}} />
            }
            return null
          })}
        </div>
      ))}
    </div>
  )
}

export default async function BlogDetailPage({ params }: Props) {
  let post: SanityPostFull | null = null
  let related: SanityPost[] = []

  try {
    post = await sanityFetch<SanityPostFull>(postBySlugQuery, { slug: params.slug })
    related = await sanityFetch<SanityPost[]>(relatedPostsQuery, { slug: params.slug })
  } catch {}

  if (!post) notFound()

  const coverUrl = post.coverImage?.asset ? urlFor(post.coverImage).width(1000).height(750).fit('crop').crop('focalpoint').url() : null

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
                  {r.coverImage?.asset ? (
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

      <section className="f-ready">
        <div className="f-ready-left">
          <p className="f-ready-heading">Ready to go <span className="green">digital</span></p>
          <div className="f-ready-body">
            <p>Want to bring your clinic onto Ninto?</p>
            <p>Join our <strong>closed beta</strong> for clinics!</p>
          </div>
          <Link href="/clinic/contact" className="f-btn">Get started</Link>
        </div>
        <div className="f-ready-right">
          <div className="f-cert"><img src="/Shared/cert%20abha.png" alt="ABDM Certified" /></div>
          <div className="f-cert"><img src="/Shared/cert%20ayushman.png" alt="Ayushman Bharat Digital Mission" /></div>
          <div className="f-cert"><img src="/Shared/cert%20nha.png" alt="National Health Authority" /></div>
        </div>
      </section>

      <section className="f-faq" id="faq">
        <div className="f-faq-left">
          <h2 className="f-faq-title">Your Questions<br/><span className="green">Answered</span></h2>
          <p className="f-faq-desc">Explore our FAQ library and take the first step toward a healthier, more informed you.</p>
        </div>
        <div className="f-faq-list">
          <div className="f-faq-item">
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Is there a free trial available?</p>
                <p className="f-faq-a">Yes, you can try us for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Can I change my plan later?</p>
                <p className="f-faq-a">Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect at the start of the next billing cycle.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">What is Ninto for and who are the users?</p>
                <p className="f-faq-a">Ninto is a unified health records platform designed for patients, doctors, clinics, and family caregivers. Anyone managing healthcare journeys can benefit from Ninto.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Can we use the application without ABHA address?</p>
                <p className="f-faq-a">Yes, you can use Ninto without an ABHA address. However, linking your ABHA ID unlocks features like nationwide record sharing and government health scheme integration.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">How many accounts can be created in one profile?</p>
                <p className="f-faq-a">A single Ninto profile supports up to 6 linked family member accounts, making it easy for caregivers to manage health records for their entire household from one login.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
        </div>
      </section>

      <FooterPatient />
    </>
  )
}
