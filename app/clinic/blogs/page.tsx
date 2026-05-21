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

        {posts.length > 0 ? (
          <div className="bl-posts-grid">
            {posts.map((post) => (
              <Link href={`/clinic/blogs/${post.slug}`} key={post._id} className="bl-card" style={{textDecoration:'none'}}>
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
                { title: 'ABDM certification guide', desc: 'Step-by-step: getting your clinic registered on India\'s national health network' },
                { title: 'Digital consent management', desc: "What every clinic needs to know about ABDM's consent framework" },
                { title: 'Multi-doctor record sharing', desc: 'Managing shared patient records across a team of practitioners' },
              ].map((b, i) => (
                <div className="bl-card" key={i}>
                  <div className="bl-thumb">
                    <div className="bl-thumb-bg"><img src="/blog-thumb-bg.png" alt="" /></div>
                  </div>
                  <div className="bl-copy">
                    <h3 className="bl-title">{b.title}</h3>
                    <p className="bl-desc">{b.desc}</p>
                    <span className="bl-more">Read more</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bl-row">
              {[
                { title: 'EMR best practices for Indian clinics', desc: 'Building a paperless practice that satisfies both patients and regulators' },
                { title: 'Scaling your clinic with Ninto', desc: 'How multi-location practices use Ninto to stay synchronized' },
              ].map((b, i) => (
                <div className="bl-card" key={i}>
                  <div className="bl-thumb">
                    <div className="bl-thumb-bg"><img src="/blog-thumb-bg.png" alt="" /></div>
                  </div>
                  <div className="bl-copy">
                    <h3 className="bl-title">{b.title}</h3>
                    <p className="bl-desc">{b.desc}</p>
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

      <FooterClinic />
    </>
  )
}
