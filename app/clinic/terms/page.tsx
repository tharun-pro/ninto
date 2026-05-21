import type { Metadata } from 'next'
import Link from 'next/link'
import NavClinic from '@/components/NavClinic'
import FooterClinic from '@/components/FooterClinic'
import SiteEffects from '@/components/SiteEffects'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Ninto Clinics',
  description: 'Terms and conditions governing clinic use of the Ninto platform.',
}

export default function ClinicTermsPage() {
  return (
    <>
      <NavClinic />
      <SiteEffects />

      <section className="tc-hero">
        <div className="tc-hero-bg" aria-hidden="true">
          <img src="/terms-hero-bg.png" alt="" />
        </div>
        <div className="tc-hero-inner">
          <div className="tc-hero-top">
            <h1 className="tc-hero-heading">
              <span className="green">Terms &amp; conditions,</span>
              <span className="dark">Our Purpose.</span>
            </h1>
            <span className="tc-hero-label">Legals</span>
          </div>
          <div className="tc-hero-bottom">
            <p className="tc-hero-body">
              Welcome to Ninto Clinics. This document is a legally binding electronic agreement under the Indian Information Technology Act, 2000 and ABDM regulations. By accessing our platform, you agree to these terms governing the relationship between your clinic and Ninto.
            </p>
          </div>
        </div>
      </section>

      <div className="tc-content">
        <div className="tc-sections">
          <div className="tc-section">
            <h2 className="tc-section-title">Eligibility &amp; account integrity.</h2>
            <p className="tc-section-body">To use Ninto Clinics, your practice must be a registered healthcare entity in India. Clinic administrators must be authorized representatives of the healthcare facility. Registration requires absolute accuracy. We reserve the right to verify healthcare credentials and suspend any accounts that provide misleading information.</p>
          </div>
          <div className="tc-section">
            <h2 className="tc-section-title">Clinic obligations &amp; conduct.</h2>
            <p className="tc-section-body">Clinics agree to use Ninto Clinics solely for legitimate healthcare management purposes, respecting all ABDM regulations and patient data rights. You may not use the platform to store non-medical data, circumvent patient consent requirements, or share access credentials with unauthorized parties.</p>
          </div>
          <div className="tc-section">
            <h2 className="tc-section-title">Clinical &amp; medical disclaimer.</h2>
            <p className="tc-section-body">Ninto Clinics is a technology facilitator, not a medical provider. Our platform is designed for record management and compliance; it is not a substitute for clinical judgment or professional medical practice. Clinics are solely responsible for the quality of care delivered using our platform.</p>
          </div>
          <div className="tc-section">
            <h2 className="tc-section-title">Liability &amp; data protection.</h2>
            <p className="tc-section-body">While we employ industry-standard encryption and ABDM-compliant data handling to protect patient data, Ninto is not liable for service interruptions caused by internet failures or third-party unauthorized access beyond our control. Clinics are responsible for ensuring their staff follow proper data handling procedures.</p>
          </div>
          <div className="tc-section">
            <h2 className="tc-section-title">Resolving disputes &amp; updates.</h2>
            <p className="tc-section-body">We aim to solve all issues amicably through a two-step process: initial mediation followed by binding arbitration under Indian law. Ninto reserves the right to modify these terms at any time; continued use of the platform after updates constitutes your acceptance of the new terms.<br /><br /><strong>Final Note:</strong> By using the Ninto Clinics platform, you acknowledge that you have read, understood, and agreed to these Terms &amp; Conditions in their entirety.</p>
          </div>
        </div>
      </div>

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
