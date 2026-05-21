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

        {posts.length > 0 ? (
          <div className="bl-posts-grid">
            {posts.map((post) => (
              <Link href={`/blogs/${post.slug}`} key={post._id} className="bl-card" style={{textDecoration:'none'}}>
                <div className="bl-thumb">
                  <div className="bl-thumb-bg">
                    {post.coverImage ? (
                      <img src={urlFor(post.coverImage).width(340).height(300).url()} alt={post.title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',borderRadius:8}} />
                    ) : (
                      <img src="/blog-thumb-bg.png" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%'}} />
                    )}
                  </div>
                </div>
                <div className="bl-copy">
                  <h3 className="bl-title">{post.title}</h3>
                  {post.excerpt && <p className="bl-desc">{post.excerpt}</p>}
                  <span className="bl-more">Read more</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <>
            <div className="bl-row">
              {[
                'Understanding ABHA and its role in your health journey',
                'How digital health records are changing patient care in India',
                'Consent management: giving patients control of their own data',
              ].map((title, i) => (
                <div className="bl-card" key={i}>
                  <div className="bl-thumb">
                    <div className="bl-thumb-bg"><img src="/blog-thumb-bg.png" alt="" /></div>
                  </div>
                  <div className="bl-copy">
                    <h3 className="bl-title">{title}</h3>
                    <p className="bl-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies dapibus pulvinar.</p>
                    <span className="bl-more">Read more</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bl-row">
              {[
                'Managing health records for the whole family with one profile',
                'How Ninto helps clinics streamline patient record management',
              ].map((title, i) => (
                <div className="bl-card" key={i}>
                  <div className="bl-thumb">
                    <div className="bl-thumb-bg"><img src="/blog-thumb-bg.png" alt="" /></div>
                  </div>
                  <div className="bl-copy">
                    <h3 className="bl-title">{title}</h3>
                    <p className="bl-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies dapibus pulvinar.</p>
                    <span className="bl-more">Read more</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
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
