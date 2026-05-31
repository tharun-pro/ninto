import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { postBySlugQuery, relatedPostsQuery, patientPostSlugsQuery } from '@/lib/queries'
import type { SanityPostFull, SanityPost } from '@/lib/sanity'
import BlogBody from '@/components/BlogBody'

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
    if (!post) return { title: 'Ninto' }
    return {
      title: 'Ninto',
      description: post.excerpt,
    }
  } catch {
    return { title: 'Ninto' }
  }
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
            {post.subText && <p className="art-subtext">{post.subText}</p>}
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
          <div className="art-section">
            {post.body ? <BlogBody body={post.body} /> : <p className="art-section-body">Content coming soon.</p>}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bl-grid-section">
          <div className="bl-grid-header">
            <p className="bl-grid-label">more blogs</p>
            <h2 className="bl-grid-title">More content <span className="green">for you</span></h2>
            <p className="bl-grid-sub">Stay informed with expert blogs on India&apos;s digital healthcare ecosystem from ABDM and ABHA IDs to EMR compliance and patient data privacy.</p>
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
            <p>Interested in what we offer?</p>
            <p>Sign up for our <strong>closed beta</strong>!</p>
          </div>
          <Link href="/contact" className="f-btn">Get started</Link>
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
                <p className="f-faq-q">What is Ninto and how does it change the way I manage my health?</p>
                <p className="f-faq-a">Think of Ninto as your personal health command center. Instead of juggling paper files and forgotten appointments, Ninto lets you store medical records and manage your entire wellness journey from one intuitive app. It&apos;s about putting the power of your health back in your hands.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Can I really keep all my medical records in one place?</p>
                <p className="f-faq-a">Absolutely. Gone are the days of digging through folders for old blood work. With Ninto&apos;s digital storage, your prescriptions, lab reports, and doctor&apos;s summaries are organized and accessible on your phone 24/7.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Is Ninto available for my smartphone?</p>
                <p className="f-faq-a">Yes! Ninto is a mobile-first platform designed for life on the go. Currently, you can download the app for Android to manage your healthcare anytime, anywhere.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">How safe is my private health information?</p>
                <p className="f-faq-a">We take your privacy as seriously as your health. Ninto uses bank-grade end-to-end encryption. This means your data is locked away and only accessible to two people: you and the healthcare providers you explicitly choose to authorize.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Does it cost anything to use Ninto?</p>
                <p className="f-faq-a">Signing up and using Ninto&apos;s core features like record storage and profile management is completely free for patients. We believe managing your health shouldn&apos;t come with a barrier to entry.</p>
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
