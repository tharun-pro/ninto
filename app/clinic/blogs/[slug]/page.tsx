import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import NavClinic from '@/components/NavClinic'
import FooterClinic from '@/components/FooterClinic'
import SiteEffects from '@/components/SiteEffects'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { postBySlugQuery, relatedClinicPostsQuery, clinicPostSlugsQuery } from '@/lib/queries'
import type { SanityPostFull, SanityPost } from '@/lib/sanity'
import BlogBody from '@/components/BlogBody'

export const dynamic = 'force-dynamic'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  try {
    const slugs = await sanityFetch<{ slug: string }[]>(clinicPostSlugsQuery)
    return slugs.map((s) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await sanityFetch<SanityPostFull>(postBySlugQuery, { slug: params.slug })
    if (!post) return { title: 'Clinic Blog — Ninto' }
    return {
      title: `${post.title} — Ninto Clinics`,
      description: post.excerpt,
    }
  } catch {
    return { title: 'Clinic Blog — Ninto' }
  }
}

export default async function ClinicBlogDetailPage({ params }: Props) {
  let post: SanityPostFull | null = null
  let related: SanityPost[] = []

  try {
    post = await sanityFetch<SanityPostFull>(postBySlugQuery, { slug: params.slug })
    related = await sanityFetch<SanityPost[]>(relatedClinicPostsQuery, { slug: params.slug })
  } catch {}

  if (!post) notFound()

  const coverUrl = post.coverImage?.asset ? urlFor(post.coverImage).width(1000).height(750).fit('crop').crop('focalpoint').url() : null

  return (
    <>
      <NavClinic />
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
          <div className="art-section">
            {post.body ? <BlogBody body={post.body} /> : <p className="art-section-body">Content coming soon.</p>}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bl-grid-section">
          <div className="bl-grid-header">
            <p className="bl-grid-label">more insights</p>
            <h2 className="bl-grid-title">More clinic blogs <span className="green">for you</span></h2>
          </div>
          <div className="bl-posts-grid">
            {related.map((r) => (
              <Link href={`/clinic/blogs/${r.slug}`} key={r._id} className="bl-card">
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
          <p className="f-faq-desc">Everything you need to know about bringing your clinic onto Ninto&apos;s ABDM-certified platform.</p>
        </div>
        <div className="f-faq-list">
          <div className="f-faq-item">
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Is Ninto Clinics ABDM certified?</p>
                <p className="f-faq-a">Yes. Ninto Clinics is fully ABDM-compliant and certified by the National Health Authority. Your clinic&apos;s digital records and patient consents are managed in line with India&apos;s national health data standards.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">How long does clinic onboarding take?</p>
                <p className="f-faq-a">Most clinics are fully onboarded within 3&ndash;5 business days. Our team handles the ABDM registration, data migration setup, and staff training so you can focus on your patients from day one.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">What is Ninto Clinics?</p>
                <p className="f-faq-a">Ninto Clinics is the provider-facing arm of Ninto &mdash; a digital health records platform built for clinics, hospitals, and independent practitioners. It handles EMR, patient consent, ABDM compliance, and record sharing in one place.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Can multiple doctors use one clinic account?</p>
                <p className="f-faq-a">Yes. A single Ninto Clinics account supports multiple practitioners with role-based access. Each doctor has their own login while sharing the clinic&apos;s patient database securely.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Is patient data secure on Ninto Clinics?</p>
                <p className="f-faq-a">Absolutely. All patient data is encrypted at rest and in transit, stored on India-based servers, and accessed only with explicit patient consent as required by ABDM regulations.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
        </div>
      </section>

      <FooterClinic />
    </>
  )
}
