import type { Metadata } from 'next'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { patientPostsQuery } from '@/lib/queries'
import type { SanityPost } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Blogs — Ninto',
  description: 'Stay informed with expert blogs on India\'s digital healthcare ecosystem.',
}

export default async function BlogsPage() {
  let posts: SanityPost[] = []
  try {
    posts = await sanityFetch<SanityPost[]>(patientPostsQuery)
  } catch {}

  return (
    <>
      <NavPatient />
      <SiteEffects />

      <section className="bl-hero">
        <div className="bl-hero-bg" aria-hidden="true">
          <img src="/blogs-hero-bg.png" alt="" />
        </div>
        <div className="bl-hero-inner">
          <div className="bl-hero-top">
            <h1 className="bl-hero-heading">
              <span className="green">Blogs,</span>
              <span className="dark">Our Purpose.</span>
            </h1>
            <span className="bl-hero-label">Blogs</span>
          </div>
          <div className="bl-hero-bottom">
            <p className="bl-hero-body">
              Store, organize and share your family&apos;s medical history.<br />
              ABHA-linked records, prescription tracking, and effortless sharing with doctors.
            </p>
          </div>
        </div>
      </section>

      <section className="bl-grid-section">
        <div className="bl-grid-header">
          <p className="bl-grid-label">our blog</p>
          <h2 className="bl-grid-title">More blogs <span className="green">for you</span></h2>
          <p className="bl-grid-desc">Stay informed with expert blogs on India&apos;s digital healthcare ecosystem from ABDM and ABHA IDs to EMR compliance and patient data privacy.</p>
        </div>

        <div className="bl-posts-grid">
          {posts.length > 0 ? posts.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post._id} className="bl-card">
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
            { title: 'Understanding ABHA and its role in your health journey', desc: 'Everything you need to know about your Ayushman Bharat Health Account.' },
            { title: 'How digital health records are changing patient care in India', desc: 'From paper to paperless: the shift to electronic health records.' },
            { title: 'Consent management: giving patients control of their own data', desc: 'How India\'s digital health ecosystem puts patients in charge.' },
            { title: 'Managing health records for the whole family with one profile', desc: 'Keep every family member\'s health history organised in one place.' },
            { title: 'How Ninto helps clinics streamline patient record management', desc: 'Reduce admin overhead and focus on delivering care.' },
            { title: 'Privacy and security in India\'s digital health ecosystem', desc: 'What ABDM\'s consent architecture means for your personal data.' },
          ].map((b, i) => (
            <Link href="/blogs" key={i} className="bl-card">
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
                <p className="f-faq-a">Yes, you can try us for free for 30 days.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Can I change my plan later?</p>
                <p className="f-faq-a">Yes, you can upgrade or downgrade your plan at any time.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">What is Ninto for and who are the users?</p>
                <p className="f-faq-a">Ninto is a unified health records platform designed for patients, doctors, clinics, and family caregivers.</p>
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
