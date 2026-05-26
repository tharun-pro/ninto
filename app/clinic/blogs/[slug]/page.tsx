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
                <p className="f-faq-q">What is Ninto, and how does it support clinic growth?</p>
                <p className="f-faq-a">Ninto is an all-in-one digital healthcare ecosystem designed to bridge the gap between clinics and patients. We help you centralize medical records, automate scheduling, and improve patient retention all through one intuitive dashboard.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Does Ninto include Electronic Medical Records (EMR)?</p>
                <p className="f-faq-a">Absolutely. Ninto&apos;s secure cloud-based EMR/EHR system allows you to digitize everything from patient history and prescriptions to visit notes. It&apos;s paperless, searchable, and accessible whenever you need it.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Can Ninto handle the needs of a large, multi-specialty clinic?</p>
                <p className="f-faq-a">Yes, it&apos;s built for scale. Ninto simplifies the complexity of multi-specialty environments by unifying workflows across different departments.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Is patient data safe with Ninto?</p>
                <p className="f-faq-a">Security isn&apos;t just a feature; it&apos;s our foundation. We use high-level encryption and follow global healthcare privacy standards to ensure that clinic data and sensitive patient records remain confidential and tamper-proof.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Can Ninto integrate with other hospitals or labs?</p>
                <p className="f-faq-a">Yes. Ninto is designed for true healthcare interoperability. By leveraging the ABHA Address, our platform allows providers to access a patient&apos;s long-term medical history across the entire digital health network, ensuring better care regardless of where the patient was previously treated.</p>
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
