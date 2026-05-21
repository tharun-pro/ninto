import type { Metadata } from 'next'
import Link from 'next/link'
import NavClinic from '@/components/NavClinic'
import FooterClinic from '@/components/FooterClinic'
import SiteEffects from '@/components/SiteEffects'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { clinicPostsQuery } from '@/lib/queries'
import type { SanityPost } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Clinic Blogs — Ninto',
  description: 'Expert guides on ABDM onboarding, EMR best practices, digital consent, and growing your clinic\'s digital footprint.',
}

export default async function ClinicBlogsPage() {
  let posts: SanityPost[] = []
  try {
    posts = await sanityFetch<SanityPost[]>(clinicPostsQuery)
  } catch {}

  return (
    <>
      <NavClinic />
      <SiteEffects />

      <section className="bl-hero">
        <div className="bl-hero-bg" aria-hidden="true">
          <img src="/clinic-blogs-hero-bg.png" alt="" />
        </div>
        <div className="bl-hero-inner">
          <div className="bl-hero-top">
            <h1 className="bl-hero-heading">
              <span className="green">Clinic Blogs,</span>
              <span className="dark">Our Purpose.</span>
            </h1>
            <span className="bl-hero-label">Blogs</span>
          </div>
          <div className="bl-hero-bottom">
            <p className="bl-hero-body">
              Expert guides on ABDM onboarding, EMR best practices, digital consent, and growing your clinic&apos;s digital footprint.
            </p>
          </div>
        </div>
      </section>

      <section className="bl-grid-section">
        <div className="bl-grid-header">
          <p className="bl-grid-label">clinic blog</p>
          <h2 className="bl-grid-title">Clinic blogs <span className="green">for you</span></h2>
          <p className="bl-grid-desc">Expert guides on ABDM onboarding, EMR best practices, digital consent, and growing your clinic&apos;s digital footprint.</p>
        </div>

        <div className="bl-posts-grid">
          {posts.length > 0 ? posts.map((post) => (
            <Link href={`/clinic/blogs/${post.slug}`} key={post._id} className="bl-card">
              <div className="bl-card-img">
                {post.coverImage ? (
                  <img src={urlFor(post.coverImage).width(600).height(450).url()} alt={post.title} />
                ) : (
                  <img src="/blog-thumb-bg.png" alt="" />
                )}
                <div className="bl-card-overlay" />
              </div>
              <div className="bl-card-arrow" aria-hidden="true"><i className="ti ti-arrow-up-right" /></div>
              <div className="bl-card-body">
                {post.category && <span className="bl-card-tag">{post.category}</span>}
                <h3 className="bl-card-title">{post.title}</h3>
                {post.excerpt && <p className="bl-card-desc">{post.excerpt}</p>}
              </div>
            </Link>
          )) : [
            { title: 'ABDM certification guide', desc: 'Step-by-step: getting your clinic registered on India\'s national health network.' },
            { title: 'Digital consent management', desc: "What every clinic needs to know about ABDM's consent framework." },
            { title: 'Multi-doctor record sharing', desc: 'Managing shared patient records across a team of practitioners.' },
            { title: 'EMR best practices for Indian clinics', desc: 'Building a paperless practice that satisfies both patients and regulators.' },
            { title: 'Scaling your clinic with Ninto', desc: 'How multi-location practices use Ninto to stay synchronized.' },
            { title: 'Patient data privacy under ABDM', desc: 'Understanding your obligations as a healthcare provider under the new framework.' },
          ].map((b, i) => (
            <Link href="/clinic/blogs" key={i} className="bl-card">
              <div className="bl-card-img">
                <img src="/blog-thumb-bg.png" alt="" />
                <div className="bl-card-overlay" />
              </div>
              <div className="bl-card-arrow" aria-hidden="true"><i className="ti ti-arrow-up-right" /></div>
              <div className="bl-card-body">
                <h3 className="bl-card-title">{b.title}</h3>
                <p className="bl-card-desc">{b.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
          <div className="f-cert"><img src="/cert-abdm.png" alt="ABDM Certified" /></div>
          <div className="f-cert"><img src="/cert-ayushman.png" alt="Ayushman Bharat Digital Mission" /></div>
          <div className="f-cert"><img src="/cert-nha.png" alt="National Health Authority" /></div>
        </div>
      </section>

      <FooterClinic />
    </>
  )
}
