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
          <img src="/clinic-about-hero-bg.png" alt="" />
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
          <div className="f-cert"><img src="/cert-abdm.png" alt="ABDM Certified" /></div>
          <div className="f-cert"><img src="/cert-ayushman.png" alt="Ayushman Bharat Digital Mission" /></div>
          <div className="f-cert"><img src="/cert-nha.png" alt="National Health Authority" /></div>
        </div>
      </section>

      <FooterClinic />
    </>
  )
}
