import type { Metadata } from 'next'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'

export const metadata: Metadata = {
  title: 'About — Ninto',
  description: 'Stop hunting through WhatsApp chats for reports. Ninto is your personal health command center, built for the way healthcare in India actually works.',
}

export default function AboutPage() {
  return (
    <>
      <NavPatient />
      <SiteEffects />

      <section className="ab-hero">
        <div className="ab-hero-bg" aria-hidden="true">
          <img src="/about-hero-bg.png" alt="" />
        </div>
        <div className="ab-hero-inner">
          <div className="ab-hero-top">
            <h1 className="ab-hero-heading">
              <span className="dark">Your medical history,</span>
              <span className="green">Synced.</span>
            </h1>
            <span className="ab-hero-label">About</span>
          </div>
          <div className="ab-hero-bottom">
            <p className="ab-hero-body">
              Stop hunting through WhatsApp chats for reports or re-explaining your history to every new doctor. Ninto is your personal health command center, built specifically for the way healthcare in India actually works.
            </p>
          </div>
        </div>
      </section>

      <section className="ab-image" aria-label="The way we help">
        <img className="ab-image-photo" src="/about-fullwidth.jpg" alt="" />
        <div className="ab-image-overlay" aria-hidden="true"></div>
        <div className="ab-image-content">
          <p className="ab-image-label">The Problem We&apos;re Solving</p>
          <p className="ab-image-text">
            Ninto is India&apos;s premier ABDM-integrated health locker app, offering secure ABHA ID management and a searchable digital timeline to streamline your family&apos;s medical records.
          </p>
        </div>
      </section>

      <section className="ab-founder">
        <h2 className="ab-founder-heading">Meet <span className="green">Our Founder</span></h2>
        <div className="ab-founder-row">
          <div className="ab-founder-photo">
            <img src="/founder-photo.jpg" alt="Founder of Ninto" />
          </div>
          <div className="ab-founder-quote">
            <p className="ab-founder-quote-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies dapibus pulvinar sed non pretium elit, quis facilisis orci donec erat massa, <span className="green">fringillo pretium elit, quis</span>
            </p>
            <p className="ab-founder-attribution">&mdash; Sam J, Founder of Ninto</p>
          </div>
        </div>
      </section>

      <section className="f-blogs">
        <div className="f-blogs-header">
          <p className="f-section-label">our team</p>
          <h2 className="f-section-title-lg">The people who made this for you</h2>
          <p className="f-section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies dapibus pulvinar. Sed non pretium elit, quis facilisis orci donec</p>
          <a href="#" className="f-btn">Meet Our Team</a>
        </div>
        <div className="f-blogs-grid">
          {[
            { blob: '/team-blob-1.png', name: 'Bennet', role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { blob: '/team-blob-2.png', name: 'Bennet', role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { blob: '/team-blob-3.png', name: 'Bennet', role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          ].map((member, i) => (
            <div className="f-blog-item" key={i}>
              <div className="f-blog-thumb">
                <div className="f-blog-thumb-blob" style={{position:'absolute'}}>
                  <img src={member.blob} alt="" style={{width:340,height:300}} />
                </div>
                <div className="f-blog-thumb-bg">
                  <img src="/team-thumb-bg.png" alt="" />
                </div>
              </div>
              <div className="f-blog-copy">
                <h3 className="f-blog-title">{member.name}</h3>
                <p className="f-blog-desc">{member.role}</p>
              </div>
            </div>
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
                <p className="f-faq-a">Yes, you can try us for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Can I change my plan later?</p>
                <p className="f-faq-a">Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect at the start of the next billing cycle.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">What is Ninto for and who are the users?</p>
                <p className="f-faq-a">Ninto is a unified health records platform designed for patients, doctors, clinics, and family caregivers. Anyone managing healthcare journeys can benefit from Ninto.</p>
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
