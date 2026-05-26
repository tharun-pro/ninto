import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { recentAllPostsQuery } from '@/lib/queries'
import type { SanityPost } from '@/lib/sanity'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Ninto — Smarter way to manage health',
  description: 'Store, organize and share your family\'s medical history. ABHA-linked records, prescription tracking, and effortless sharing with doctors.',
}

export default async function HomePage() {
  let recentPosts: SanityPost[] = []
  try {
    recentPosts = await sanityFetch<SanityPost[]>(recentAllPostsQuery)
  } catch {}

  return (
    <>
      <NavPatient />
      <SiteEffects />

      {/* Hero */}
      <section className="hero" aria-label="Hero">
        <div className="stage">
          <div className="surface-scene" aria-hidden="true">
            <div className="surface">
              <div className="splash-flash"></div>
              <div className="ring r1"></div>
              <div className="ring r2"></div>
              <div className="ring r3"></div>
              <div className="ring r4"></div>
            </div>
          </div>
          <div className="contact-shadow" aria-hidden="true"></div>
          <div className="orb-anchor" aria-hidden="true">
            <div className="orb-halo"></div>
            <div className="orb-floater">
              <div className="orb">
                <div className="orb-body"></div>
                <div className="orb-ambient"></div>
                <div className="liquid-clip">
                  <div className="liquid-glow"></div>
                  <div className="liquid-fill"></div>
                  <div className="wave w1">
                    <svg viewBox="0 0 800 60" preserveAspectRatio="none">
                      <path d="M0 30 Q100 10 200 30 Q300 50 400 30 Q500 10 600 30 Q700 50 800 30 L800 60 L0 60 Z"/>
                    </svg>
                  </div>
                  <div className="wave w2">
                    <svg viewBox="0 0 800 60" preserveAspectRatio="none">
                      <path d="M0 30 Q100 50 200 30 Q300 10 400 30 Q500 50 600 30 Q700 10 800 30 L800 60 L0 60 Z"/>
                    </svg>
                  </div>
                  <div className="liquid-gloss"></div>
                </div>
                <div className="orb-glyph" style={{opacity: 0.45 , zIndex: 7}}>
                  <img src="/Shared/logoglyph.svg" alt="" aria-hidden width={"10px"} />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Smarter way to <span style={{color:'#00a000'}}>manage health</span></h1>
            <p className="hero-lede">Store, organize and share your family&apos;s medical history. ABHA-linked records, prescription tracking, and effortless sharing with doctors.</p>
            <div className="hero-actions">
              <Link href="/contact" className="fnav-btn">Get started</Link>
              <Link href="/clinic" className="hero-btn-clinic">
                <span className="clinic-dot-enter"></span>
                <span className="clinic-text">For clinic</span>
                <span className="clinic-dot-exit"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <div className="f-intro-scroll">
        <section className="f-intro">
          <div className="f-intro-inner">
            <p className="f-intro-label">Health Hub</p>
            <p className="f-intro-text">At Ninto, we bring all your medical records together in one secure, easy-to-use app. With simple ABHA integration and effortless family sharing, taking care of the people you love is now right in your pocket.</p>
          </div>
        </section>
      </div>

      {/* About */}
      <section className="f-about" id="about">
        <div className="f-about-left">
          <p className="f-eyebrow">about</p>
          <h2 className="f-about-heading">
            <span className="green">Your path,</span>
            <span className="dark">Our Purpose.</span>
          </h2>
          <p className="f-about-body">At Ninto, we don&apos;t rush change &mdash; we help it unfold with intention. Through meaningful conversation, mindful tools, and a steady pace, we support growth that lasts.</p>
          <Link href="/about" className="f-btn">About Ninto</Link>
        </div>
        <div className="f-about-imgs">
          <div className="f-about-img-grid">
            <div className="f-about-img-card">
              <Image src="/Patient/about%20img%201.jpg" alt="" fill style={{objectFit:'cover'}} />
            </div>
            <div className="f-about-img-card">
              <Image src="/Patient/about%20img%202.jpg" alt="" fill style={{objectFit:'cover'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="f-benefits" id="benefits">
        <div className="f-benefits-bg" aria-hidden="true">
          <img id="benefits-bg-img" src="/Patient/benifits%20bg.png" alt="" style={{transition:'opacity .45s ease'}} />
        </div>
        <div className="f-benefits-inner">
          <div className="f-benefits-left">
            <div className="f-benefits-copy">
              <p className="f-eyebrow">key benefits</p>
              <p className="f-benefits-title" style={{transition:'opacity .25s ease'}}>Consent management</p>
              <p className="f-benefits-body" style={{transition:'opacity .25s ease'}}>Reviewing consent requests, setting access periods, and toggling auto-approval.</p>
            </div>
            <div className="f-benefits-nav">
              <button className="f-nav-circle prev" aria-label="Previous">
                <i className="ti ti-arrow-left"></i>
              </button>
              <button className="f-nav-circle next" aria-label="Next">
                <i className="ti ti-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="f-benefits-mock">
            <div className="f-benefits-mock-panel active">
              <img src="/Patient/benifits%201.png" alt="Consent management" style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',width:'100%',height:'686px',objectFit:'cover'}} />
            </div>
            <div className="f-benefits-mock-panel">
              <img src="/Patient/benifits%202.png" alt="Manage health locker" style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',width:'100%',height:'591px',objectFit:'cover'}} />
            </div>
            <div className="f-benefits-mock-panel">
              <img src="/Patient/benifits%203.png" alt="Profile management" style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',width:'100%',height:'650px',objectFit:'cover'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="f-testimonials" id="testimonials">
        <div className="f-testimonials-header">
          <p className="f-section-label">testimonials</p>
          <h2 className="f-section-title-lg">Feedback from <span className="green">our users</span></h2>
          <p className="f-section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies dapibus pulvinar. Sed non pretium elit, quis facilisis orci donec</p>
        </div>
        <div className="f-t-cards">
          {[1,2,3].map((i) => (
            <div className="f-t-card" key={i}>
              <div className="f-t-card-bar"></div>
              <div className="f-t-card-body">
                <div className="f-t-avatar-wrap">
                  <img src={`/Patient/avatar%20${i}.jpg`} alt="" />
                </div>
                <p className="f-t-quote">We reduced our customer onboarding time by 60% using Ninto. The Byepo team felt like an extension of our product team.</p>
                <div className="f-t-meta">
                  <span className="f-t-name">Dr. Sam J</span>
                  <span className="f-t-role">General physician</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="f-logos" aria-label="Partner clinics">
          <div className="f-logos-track" aria-hidden="true">
            {[...Array(4)].map((_, set) =>
              ['/Shared/partner%20logo.png','/Shared/partner%20logo%20%282%29.png','/Shared/partner%20logo%20%283%29.png','/Shared/partner%20logo%20%284%29.png','/Shared/partner%20logo%20%285%29.png'].map((src, i) => (
                <div className="f-logo-cell" key={`${set}-${i}`}>
                  <img src={src} alt="" style={{width:80,height:60,objectFit:'contain'}} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Users */}
      <section className="f-users" id="users">
        <div className="f-users-header">
          <p className="f-section-label">ninto users</p>
          <h2 className="f-section-title-lg">The people who made this for you</h2>
          <p className="f-section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies dapibus pulvinar. Sed non pretium elit, quis facilisis orci donec</p>
        </div>
        <div className="f-users-scroll-track">
          <div className="f-users-sticky-body">
            <div className="f-users-body">
              <div className="f-users-list">
                <div className="f-user-item active" data-image="/Patient/abha.png">
                  <div className="f-user-item-content">
                    <span className="f-user-tag">ABHA</span>
                    <p className="f-user-title">The ABHA-Enabled Patient</p>
                    <div className="f-user-subheader-wrap"><p className="f-user-subheader">If you&apos;re already part of India&apos;s national health stack, Ninto is your ultimate command center. We bridge the gap between your ABHA ID and actionable health management.</p></div>
                    <div className="f-user-inline-img-wrap"><div className="f-user-inline-img-inner"><img src="/Patient/abha.png" alt="Ninto user" /></div></div>
                  </div>
                  <div className="f-user-arrow up"><i className="ti ti-chevron-right"></i></div>
                </div>
                <div className="f-user-item" data-image="/Patient/chronic.png">
                  <div className="f-user-item-content">
                    <span className="f-user-tag">Chronic</span>
                    <p className="f-user-title">The Chronic Care Warrior</p>
                    <div className="f-user-subheader-wrap"><p className="f-user-subheader">Living with conditions like Diabetes, hypertension, or thyroid disorders means managing a mountain of data. Ninto turns scattered lab results and prescriptions into a clear story.</p></div>
                    <div className="f-user-inline-img-wrap"><div className="f-user-inline-img-inner"><img src="/Patient/chronic.png" alt="Ninto user" /></div></div>
                  </div>
                  <div className="f-user-arrow down"><i className="ti ti-chevron-right"></i></div>
                </div>
                <div className="f-user-item" data-image="/Patient/family.png">
                  <div className="f-user-item-content">
                    <span className="f-user-tag">Family</span>
                    <p className="f-user-title">The Family Caregiver</p>
                    <div className="f-user-subheader-wrap"><p className="f-user-subheader">From a toddler&apos;s first vaccinations to a parent&apos;s cardiology reports, managing family health across different hospitals is exhausting. Ninto puts the whole family&apos;s history in your pocket.</p></div>
                    <div className="f-user-inline-img-wrap"><div className="f-user-inline-img-inner"><img src="/Patient/family.png" alt="Ninto user" /></div></div>
                  </div>
                  <div className="f-user-arrow down"><i className="ti ti-chevron-right"></i></div>
                </div>
                <div className="f-user-item" data-image="/Patient/specialist.png">
                  <div className="f-user-item-content">
                    <span className="f-user-tag">Specialist</span>
                    <p className="f-user-title">The Multi-Specialist Patient</p>
                    <div className="f-user-subheader-wrap"><p className="f-user-subheader">When you&apos;re seeing a cardiologist, a nutritionist, and a GP simultaneously, things get lost in translation. Ninto acts as the &quot;connective tissue&quot; between your doctors.</p></div>
                    <div className="f-user-inline-img-wrap"><div className="f-user-inline-img-inner"><img src="/Patient/specialist.png" alt="Ninto user" /></div></div>
                  </div>
                  <div className="f-user-arrow down"><i className="ti ti-chevron-right"></i></div>
                </div>
              </div>
              <div className="f-users-image">
                <img src="/Patient/abha.png" alt="Ninto user" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="f-blogs" id="blogs">
        <div className="f-blogs-header">
          <p className="f-section-label">Blogs</p>
          <h2 className="f-section-title-lg">More content <span className="green">for</span> <span className="green">you</span></h2>
          <p className="f-section-desc">Stay informed with expert blogs on India&apos;s digital healthcare ecosystem from ABDM and ABHA IDs to EMR compliance and patient data privacy.</p>
          <Link href="/blogs" className="f-btn">Explore Blogs</Link>
        </div>
        <div className="bl-posts-grid">
          {recentPosts.length > 0 ? recentPosts.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post._id} className="bl-card">
              <div className="bl-card-img">
                {post.coverImage?.asset ? (
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
            { title: 'Health Insights', desc: 'Stay informed with expert blogs on India\'s digital healthcare ecosystem.' },
            { title: 'ABHA & Your Health', desc: 'Understanding ABHA and its role in your health journey.' },
            { title: 'Digital Health Records', desc: 'How digital records are changing patient care in India.' },
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

      {/* Ready CTA */}
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

      {/* FAQ */}
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
