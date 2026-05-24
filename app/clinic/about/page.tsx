import type { Metadata } from 'next'
import Link from 'next/link'
import NavClinic from '@/components/NavClinic'
import FooterClinic from '@/components/FooterClinic'
import SiteEffects from '@/components/SiteEffects'

export const metadata: Metadata = {
  title: 'About — Ninto Clinics',
  description: 'Meeting every regulation so you can focus exclusively on your patients. We handle the compliance, you provide the care.',
}

export default function ClinicAboutPage() {
  return (
    <>
      <NavClinic />
      <SiteEffects />

      <section className="ab-hero">
        <div className="ab-hero-bg" aria-hidden="true">
          <img src="/Shared/hero%20bg.png" alt="" />
        </div>
        <div className="ab-hero-inner">
          <div className="ab-hero-top">
            <h1 className="ab-hero-heading">
              <span className="dark">Your clinic,</span>
              <span className="green">Compliant.</span>
            </h1>
            <span className="ab-hero-label">About</span>
          </div>
          <div className="ab-hero-bottom">
            <p className="ab-hero-body">
              Stop wrestling with government portals and compliance paperwork. Ninto Clinics is your complete ABDM-certified health management platform, built specifically for the way Indian clinics operate.
            </p>
          </div>
        </div>
      </section>

      <section className="ab-image" aria-label="The way we help">
        <img className="ab-image-photo" src="/clinic-about-fullwidth.jpg" alt="" />
        <div className="ab-image-overlay" aria-hidden="true"></div>
        <div className="ab-image-content">
          <p className="ab-image-label">The Problem We&apos;re Solving</p>
          <p className="ab-image-text">
            Ninto Clinics is India&apos;s premier ABDM-integrated clinic management platform, offering seamless EMR, digital consent, and a connected patient network &mdash; so every clinic can deliver world-class care without the compliance burden.
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
