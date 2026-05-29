import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import NavClinic from '@/components/NavClinic'
import FooterClinic from '@/components/FooterClinic'
import SiteEffects from '@/components/SiteEffects'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { recentAllPostsQuery } from '@/lib/queries'
import type { SanityPost } from '@/lib/sanity'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Ninto Clinics — Powering the future of care',
  description: 'All-in-one patient record and OPD management software for clinics. ABDM certified, ABHA-linked.',
}

export default async function ClinicHomePage() {
  let recentPosts: SanityPost[] = []
  try {
    recentPosts = await sanityFetch<SanityPost[]>(recentAllPostsQuery)
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
                <div className="orb-glyph" style={{opacity: 0.45 , zIndex: 7}}>
                  <img src="/Shared/logoglyph.svg" alt="" aria-hidden />
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
            <p className="f-intro-label">Beyond Paperwork</p>
            <p className="f-intro-text">As a clinic, the last thing you need is patient data scattered everywhere. That&apos;s why Ninto unifies your records, smartens up your OPD daily workflows, and handles ABDM compliance automatically.</p>
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
              <Image src="/Clinic/about%20img%201.jpg" alt="" fill style={{objectFit:'cover'}} />
            </div>
            <div className="f-about-img-card">
              <Image src="/Clinic/about%20img%202.jpg" alt="" fill style={{objectFit:'cover'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="f-benefits" id="benefits">
        <div className="f-benefits-bg" aria-hidden="true">
          <img id="benefits-bg-img" src="/Clinic/benifits%20bg.png" alt="" style={{transition:'opacity .45s ease'}} />
        </div>
        <div className="f-benefits-inner">
          <div className="f-benefits-left">
            <div className="f-benefits-copy">
              <p className="f-eyebrow">key benefits</p>
              <p className="f-benefits-title" style={{transition:'opacity .25s ease'}}>Counter management</p>
              <p className="f-benefits-body" style={{transition:'opacity .25s ease'}}>Set up counters, invite your staff, and assign roles in minutes. Every member knows where to show up and who to serve.</p>
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
              <img src="/Clinic/benifits.png" alt="Counter management" style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',width:'100%',height:'492px',objectFit:'cover'}} />
            </div>
            <div className="f-benefits-mock-panel">
              <img src="/Clinic/benifits%20%282%29.png" alt="Document management" style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',width:'100%',height:'580px',objectFit:'cover'}} />
            </div>
            <div className="f-benefits-mock-panel">
              <img src="/Clinic/benifits%20%283%29.png" alt="Patient health locker" style={{position:'absolute',left:0,top:'50%',transform:'translateY(-50%)',width:'100%',height:'580px',objectFit:'cover'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="f-testimonials" id="testimonials">
        <div className="f-testimonials-header">
          <p className="f-section-label">testimonials</p>
          <h2 className="f-section-title-lg">Feedback from <span className="green">our clinics</span></h2>
          <p className="f-section-desc">Real results from real people. See how our users are achieving their goals with our platform.</p>
        </div>
        <div className="f-t-cards">
          {[
            { quote: 'We reduced our customer onboarding time by 60% using Ninto. The Byepo team felt like an extension of our product team, deeply collaborative and incredibly fast.', name: 'Dr. Meera Krishnan', role: 'General Physician, Chennai' },
            { quote: 'Ninto completely changed how we handle support. Response times dropped by half, and our engineers can finally focus on shipping features instead of putting out fires.', name: 'Dr. Arjun Nair', role: 'Cardiologist, Kochi' },
            { quote: "Within two weeks of going live, we saw measurable results. The dashboard visibility alone was worth the switch — I'd recommend Ninto to any team that's scaling fast.", name: 'Priya Sharma', role: 'Lab Director, Bengaluru' },
          ].map((t, i) => (
            <div className="f-t-card" key={i}>
              <div className="f-t-card-bar"></div>
              <div className="f-t-card-body">
                <div className="f-t-avatar-wrap">
                  <img src={`/Clinic/avatar%20${i + 1}.jpg`} alt="" />
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
              ['/Shared/partner%20logo.png','/Shared/partner%20logo%20%282%29.png','/Shared/partner%20logo%20%283%29.png','/Shared/partner%20logo%20%284%29.png','/Shared/partner%20logo%20%285%29.png'].map((src, i) => (
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
          <p className="f-section-desc">Health looks different for everyone. A chronic diagnosis, a growing family, a handful of specialists — Ninto fits into it.</p>
        </div>
        <div className="f-clinics-scroll-track">
          <div className="f-clinics-sticky-body">
            <div className="f-clinics-body">
              <div className="f-clinics-list">
                <div className="f-clinic-item active" data-image="/Clinic/specialist.png">
                  <div className="f-clinic-item-content">
                    <span className="f-clinic-tag">Specialist</span>
                    <p className="f-clinic-title">Specialist Clinics</p>
                    <div className="f-clinic-subheader-wrap"><p className="f-clinic-subheader">HPR-registered specialists need more than just records; they need a workflow that respects the patient&apos;s journey. From digital consent to specialty-specific handoffs, we&apos;ve got the details covered.</p></div>
                    <div className="f-clinic-inline-img-wrap"><div className="f-clinic-inline-img-inner"><img src="/Clinic/specialist.png" alt="Specialist clinic" /></div></div>
                  </div>
                  <div className="f-clinic-arrow up"><i className="ti ti-chevron-right"></i></div>
                </div>
                <div className="f-clinic-item" data-image="/Clinic/abha.png">
                  <div className="f-clinic-item-content">
                    <span className="f-clinic-tag">Hospital</span>
                    <p className="f-clinic-title">Multispecialty Hospitals &amp; Polyclinics</p>
                    <div className="f-clinic-subheader-wrap"><p className="f-clinic-subheader">Managing a hospital shouldn&apos;t feel like managing ten different businesses. Ninto connects your counters, labs, and departments into a single, synchronized heartbeat.</p></div>
                    <div className="f-clinic-inline-img-wrap"><div className="f-clinic-inline-img-inner"><img src="/Clinic/abha.png" alt="Hospital" /></div></div>
                  </div>
                  <div className="f-clinic-arrow down"><i className="ti ti-chevron-right"></i></div>
                </div>
                <div className="f-clinic-item" data-image="/Clinic/chronic.png">
                  <div className="f-clinic-item-content">
                    <span className="f-clinic-tag">Diagnostic</span>
                    <p className="f-clinic-title">Diagnostic Labs &amp; Radiology Centers</p>
                    <div className="f-clinic-subheader-wrap"><p className="f-clinic-subheader">Don&apos;t let reports get lost in an inbox. Deliver results directly to the patient&apos;s ABHA-linked record, ensuring that doctors see your findings the moment they are ready.</p></div>
                    <div className="f-clinic-inline-img-wrap"><div className="f-clinic-inline-img-inner"><img src="/Clinic/chronic.png" alt="Diagnostic centre" /></div></div>
                  </div>
                  <div className="f-clinic-arrow down"><i className="ti ti-chevron-right"></i></div>
                </div>
                <div className="f-clinic-item" data-image="/Clinic/family.png">
                  <div className="f-clinic-item-content">
                    <span className="f-clinic-tag">Hybrid</span>
                    <p className="f-clinic-title">Telemedicine &amp; Hybrid-Care Providers</p>
                    <div className="f-clinic-subheader-wrap"><p className="f-clinic-subheader">Whether your patient is on a screen or in your office, their record should be the same. Ninto creates a continuous care journey that bridges the gap between remote and in-person visits.</p></div>
                    <div className="f-clinic-inline-img-wrap"><div className="f-clinic-inline-img-inner"><img src="/Clinic/family.png" alt="Telemedicine" /></div></div>
                  </div>
                  <div className="f-clinic-arrow down"><i className="ti ti-chevron-right"></i></div>
                </div>
              </div>
              <div className="f-clinics-image">
                <img src="/Clinic/specialist.png" alt="Ninto User" />
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
        <div className="bl-posts-grid">
          {recentPosts.length > 0 ? recentPosts.map((post) => (
            <Link href={`/clinic/blogs/${post.slug}`} key={post._id} className="bl-card">
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
                <h3 className="bl-card-title">{post.title}</h3>
                {post.excerpt && <p className="bl-card-desc">{post.excerpt}</p>}
              </div>
            </Link>
          )) : [
            { title: 'ABDM certification guide', desc: 'Step-by-step: getting your clinic registered on India\'s national health network' },
            { title: 'Digital consent management', desc: "What every clinic needs to know about ABDM's consent framework" },
            { title: 'Multi-doctor record sharing', desc: 'Managing shared patient records across a team of practitioners' },
          ].map((blog, i) => (
            <Link href="/clinic/blogs" key={i} className="bl-card">
              <div className="bl-card-img">
                <img src="/blog-thumb-bg.png" alt="" />
                <div className="bl-card-overlay" />
              </div>
              <div className="bl-card-arrow" aria-hidden="true"><i className="ti ti-arrow-up-right" /></div>
              <div className="bl-card-body">
                <h3 className="bl-card-title">{blog.title}</h3>
                <p className="bl-card-desc">{blog.desc}</p>
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
