import type { Metadata } from 'next'
import Link from 'next/link'
import NavClinic from '@/components/NavClinic'
import FooterClinic from '@/components/FooterClinic'
import SiteEffects from '@/components/SiteEffects'

export const metadata: Metadata = {
  title: 'Privacy Policies — Ninto Clinics',
  description: 'At Ninto Clinics, your patients\' data is protected by industry-leading security and full ABDM compliance.',
}

export default function ClinicPrivacyPage() {
  return (
    <>
      <NavClinic />
      <SiteEffects />

      <section className="pp-hero">
        <div className="pp-hero-bg" aria-hidden="true">
          <img src="/privacy-hero-bg.png" alt="" />
        </div>
        <div className="pp-hero-inner">
          <div className="pp-hero-top">
            <h1 className="pp-hero-heading">
              <span className="green">Privacy,</span>
              <span className="dark">Our Purpose.</span>
            </h1>
            <span className="pp-hero-label">Privacy</span>
          </div>
          <div className="pp-hero-bottom">
            <p className="pp-hero-body">
              At Ninto Clinics, your patients&apos; health journey is personal, and so is their data. We are committed to transparency, security, and the protection of medical and personal information under the Indian IT Act, 2000 and ABDM regulations.
            </p>
          </div>
        </div>
      </section>

      <div className="pp-content">
        <div className="pp-sections">
          <div className="pp-section">
            <h2 className="pp-section-title">What we collect.</h2>
            <p className="pp-section-body">To provide a seamless clinic management experience, we collect clinic and practitioner information, patient health records with explicit consent, and operational data such as appointment logs. We also gather device usage and IP addresses to optimize performance and security.</p>
          </div>
          <div className="pp-section">
            <h2 className="pp-section-title">How we use it.</h2>
            <p className="pp-section-body">Patient data is used exclusively to deliver the services your clinic has configured — record management, consent tracking, and ABHA-linked sharing. We never use patient health data for advertising. Clinic operational data helps us improve our platform and maintain compliance with ABDM standards.</p>
          </div>
          <div className="pp-section">
            <h2 className="pp-section-title">Your rights &amp; control.</h2>
            <p className="pp-section-body">As a clinic administrator, you control how patient data is accessed and shared. Under ABDM regulations, patients retain full ownership of their health records. You can configure consent settings, revoke access, and download complete data exports at any time from your admin dashboard.</p>
          </div>
          <div className="pp-section">
            <h2 className="pp-section-title">Security &amp; confidentiality.</h2>
            <p className="pp-section-body">All data is encrypted during transmission and at rest using rigorous technical and physical safeguards. Patient records are stored on India-based servers and accessed only with explicit patient consent as required by ABDM. We maintain a strict no-sale policy for all patient data.</p>
          </div>
          <div className="pp-section">
            <h2 className="pp-section-title">Sharing &amp; transparency.</h2>
            <p className="pp-section-body">Patient records are only shared when authorized by the patient via ABDM consent flows. Clinic data is never shared with third parties without your explicit authorization. We enforce strict contractual protections for any data processed by our infrastructure partners.</p>
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
