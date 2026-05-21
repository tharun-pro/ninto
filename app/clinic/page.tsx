import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import NavClinic from '@/components/NavClinic'
import FooterClinic from '@/components/FooterClinic'
import SiteEffects from '@/components/SiteEffects'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { recentClinicPostsQuery } from '@/lib/queries'
import type { SanityPost } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Ninto Clinics — Powering the future of care',
  description: 'All-in-one patient record and OPD management software for clinics. ABDM certified, ABHA-linked.',
}

export default async function ClinicHomePage() {
  let recentPosts: SanityPost[] = []
  try {
    recentPosts = await sanityFetch<SanityPost[]>(recentClinicPostsQuery)
  } catch {}

  return (
    <>
      <NavClinic />
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
                <div className="orb-glyph">
                  <Image src="/ninto-clinic-logo.png" alt="" aria-hidden width={60} height={60} />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title"><span style={{color:'#00a000'}}>Powering</span> the future of care</h1>
            <p className="hero-lede">All-in-one patient record and OPD management software for clinics. Manage appointments, histories, prescriptions, and billing in one dashboard.</p>
            <div className="hero-actions">
              <Link href="/clinic/contact" className="fnav-btn">Get started</Link>
              <Link href="/" className="hero-btn-patient">
                <span className="patient-dot-enter"></span>
                <span className="patient-text">For patients</span>
                <span className="patient-dot-exit"></span>
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
            <span className="green">Your clinic,</span>
            <span className="dark">Our Compliance.</span>
          </h2>
          <p className="f-about-body">At Ninto Clinics, we handle every regulation so you can focus entirely on your patients. ABDM onboarding, EMR management, patient consent, and data security &mdash; all taken care of, from day one.</p>
          <Link href="/clinic/about" className="f-btn">About Ninto Clinic</Link>
        </div>
        <div className="f-about-imgs">
          <div className="f-about-img-grid">
            <div className="f-about-img-card">
              <img src="/clinic-about-img-1.jpg" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            </div>
            <div className="f-about-img-card">
              <img src="/clinic-about-img-2.jpg" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="f-benefits" id="benefits">
        <div className="f-benefits-inner">
          <div className="f-benefits-bg" aria-hidden="true">
            <img id="benefits-bg-img" src="/clinic-benefits-bg.png" alt="" style={{transition:'opacity .45s ease'}} />
          </div>
          <div className="f-benefits-left">
            <div className="f-benefits-copy">
              <p className="f-eyebrow">key benefits</p>
              <p className="f-benefits-title" style={{transition:'opacity .25s ease'}}>Counter management</p>
              <p className="f-benefits-body" style={{transition:'opacity .25s ease'}}>Set up counters, invite your staff, and assign roles in minutes. Every member knows where to show up and who to serve.</p>
            </div>
            <div className="f-benefits-nav">
              <button className="f-nav-circle prev" aria-label="Previous">
                <img src="/arrow-right.png" alt="" />
              </button>
              <button className="f-nav-circle next" aria-label="Next">
                <img src="/arrow-right.png" alt="" />
              </button>
            </div>
          </div>
          <div className="f-benefits-mock">
            <div className="f-benefits-mock-panel active">
              <img src="/clinic-benefits-panel-1.png" alt="Counter management" style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',width:'100%',height:'492px',objectFit:'cover'}} />
            </div>
            <div className="f-benefits-mock-panel">
              <img src="/clinic-benefits-panel-2.png" alt="Document management" style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',width:'100%',height:'580px',objectFit:'cover'}} />
            </div>
            <div className="f-benefits-mock-panel">
              <img src="/clinic-benefits-panel-3.png" alt="Patient management" style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',width:'100%',height:'580px',objectFit:'cover'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="f-testimonials" id="testimonials">
        <div className="f-testimonials-header">
          <p className="f-section-label">testimonials</p>
          <h2 className="f-section-title-lg">Feedback from <span className="green">our clinics</span></h2>
          <p className="f-section-desc">Clinics across India are already using Ninto to simplify compliance and deliver better patient experiences.</p>
        </div>
        <div className="f-t-cards">
          {[
            { quote: 'Ninto cut our patient onboarding time by 60%. Consent is now digital and patients actually trust us more because of the transparency.', name: 'Dr. Meera Krishnan', role: 'General Physician, Chennai' },
            { quote: "The ABDM onboarding was painless. Ninto's team handled everything — we were live in four days without touching a single government portal ourselves.", name: 'Dr. Arjun Nair', role: 'Cardiologist, Kochi' },
            { quote: "Our lab now pushes results directly into patients' ABHA lockers. Patients love it and we get fewer callback requests asking for report copies.", name: 'Priya Sharma', role: 'Lab Director, Bengaluru' },
          ].map((t, i) => (
            <div className="f-t-card" key={i}>
              <div className="f-t-card-bar"></div>
              <div className="f-t-card-body">
                <div className="f-t-avatar-wrap">
                  <img src="/avatar-placeholder.png" alt="" />
                </div>
                <p className="f-t-quote">{t.quote}</p>
                <div className="f-t-meta">
                  <span className="f-t-name">{t.name}</span>
                  <span className="f-t-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="f-logos" aria-label="Partner clinics">
          <div className="f-logos-track" aria-hidden="true">
            {[...Array(4)].map((_, set) =>
              ['/logo-1.png','/logo-2.png','/logo-3.png','/logo-4.png','/logo-5.png'].map((src, i) => (
                <div className="f-logo-cell" key={`${set}-${i}`}>
                  <img src={src} alt="" style={{width:80,height:60,objectFit:'contain'}} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Clinics accordion */}
      <section className="f-clinics" id="clinics">
        <div className="f-clinics-header">
          <p className="f-section-label">ninto users</p>
          <h2 className="f-section-title-lg">Built for every <span className="green">kind of clinic</span></h2>
          <p className="f-section-desc">From solo GP practices to multi-specialty hospitals, Ninto Clinics adapts to how your practice works — not the other way around.</p>
        </div>
        <div className="f-clinics-scroll-track">
          <div className="f-clinics-sticky-body">
            <div className="f-clinics-body">
              <div className="f-clinics-list">
                <div className="f-clinic-item active" data-image="/clinic-specialist.jpg">
                  <div className="f-clinic-item-content">
                    <span className="f-clinic-tag">Specialist</span>
                    <p className="f-clinic-title">Specialist Clinics</p>
                    <div className="f-clinic-subheader-wrap"><p className="f-clinic-subheader">HPR-registered specialists need more than just records; they need a workflow that respects the patient&apos;s journey. From digital consent to specialty-specific handoffs, we&apos;ve got the details covered.</p></div>
                    <div className="f-clinic-inline-img-wrap"><div className="f-clinic-inline-img-inner"><img src="/clinic-specialist.jpg" alt="Specialist clinic" /></div></div>
                  </div>
                  <div className="f-clinic-arrow up"><i className="ti ti-chevron-right"></i></div>
                </div>
                <div className="f-clinic-item" data-image="/clinic-hospital.jpg">
                  <div className="f-clinic-item-content">
                    <span className="f-clinic-tag">Hospital</span>
                    <p className="f-clinic-title">Multispecialty Hospitals &amp; Polyclinics</p>
                    <div className="f-clinic-subheader-wrap"><p className="f-clinic-subheader">Managing a hospital shouldn&apos;t feel like managing ten different businesses. Ninto connects your counters, labs, and departments into a single, synchronized heartbeat.</p></div>
                    <div className="f-clinic-inline-img-wrap"><div className="f-clinic-inline-img-inner"><img src="/clinic-hospital.jpg" alt="Hospital" /></div></div>
                  </div>
                  <div className="f-clinic-arrow down"><i className="ti ti-chevron-right"></i></div>
                </div>
                <div className="f-clinic-item" data-image="/clinic-diagnostic.jpg">
                  <div className="f-clinic-item-content">
                    <span className="f-clinic-tag">Diagnostic</span>
                    <p className="f-clinic-title">Diagnostic Labs &amp; Radiology Centers</p>
                    <div className="f-clinic-subheader-wrap"><p className="f-clinic-subheader">Don&apos;t let reports get lost in an inbox. Deliver results directly to the patient&apos;s ABHA-linked record, ensuring that doctors see your findings the moment they are ready.</p></div>
                    <div className="f-clinic-inline-img-wrap"><div className="f-clinic-inline-img-inner"><img src="/clinic-diagnostic.jpg" alt="Diagnostic centre" /></div></div>
                  </div>
                  <div className="f-clinic-arrow down"><i className="ti ti-chevron-right"></i></div>
                </div>
                <div className="f-clinic-item" data-image="/clinic-telemedicine.jpg">
                  <div className="f-clinic-item-content">
                    <span className="f-clinic-tag">Hybrid</span>
                    <p className="f-clinic-title">Telemedicine &amp; Hybrid-Care Providers</p>
                    <div className="f-clinic-subheader-wrap"><p className="f-clinic-subheader">Whether your patient is on a screen or in your office, their record should be the same. Ninto creates a continuous care journey that bridges the gap between remote and in-person visits.</p></div>
                    <div className="f-clinic-inline-img-wrap"><div className="f-clinic-inline-img-inner"><img src="/clinic-telemedicine.jpg" alt="Telemedicine" /></div></div>
                  </div>
                  <div className="f-clinic-arrow down"><i className="ti ti-chevron-right"></i></div>
                </div>
              </div>
              <div className="f-clinics-image">
                <img src="/clinic-specialist.jpg" alt="Ninto User" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="f-blogs" id="blogs">
        <div className="f-blogs-header">
          <p className="f-section-label">Blogs</p>
          <h2 className="f-section-title-lg">Clinic blogs <span className="green">for you</span></h2>
          <p className="f-section-desc">Expert guides on ABDM onboarding, EMR best practices, digital consent, and growing your clinic&apos;s digital footprint.</p>
          <Link href="/clinic/blogs" className="f-btn">Explore blogs</Link>
        </div>
        <div className="f-blogs-grid">
          {recentPosts.length > 0 ? recentPosts.map((post) => (
            <Link href={`/clinic/blogs/${post.slug}`} key={post._id} className="f-blog-item" style={{textDecoration:'none'}}>
              <div className="f-blog-thumb">
                <div className="f-blog-thumb-bg">
                  {post.coverImage && (
                    <img src={urlFor(post.coverImage).width(340).height(300).url()} alt={post.title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} />
                  )}
                </div>
              </div>
              <div className="f-blog-copy">
                <h3 className="f-blog-title">{post.title}</h3>
                {post.excerpt && <p className="f-blog-desc">{post.excerpt}</p>}
                <span className="f-blog-more">Read more</span>
              </div>
            </Link>
          )) : [
            { title: 'ABDM certification guide', desc: 'Step-by-step: getting your clinic registered on India\'s national health network' },
            { title: 'Digital consent management', desc: "What every clinic needs to know about ABDM's consent framework" },
            { title: 'Multi-doctor record sharing', desc: 'Managing shared patient records across a team of practitioners' },
          ].map((blog, i) => (
            <div className="f-blog-item" key={i}>
              <div className="f-blog-thumb">
                <div className="f-blog-thumb-bg">
                  <img src="/blog-thumb-bg.png" alt="" />
                </div>
              </div>
              <div className="f-blog-copy">
                <h3 className="f-blog-title">{blog.title}</h3>
                <p className="f-blog-desc">{blog.desc}</p>
                <Link href="/clinic/blogs" className="f-blog-more">Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ready CTA */}
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

      {/* FAQ */}
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
