import type { Metadata } from 'next'
import Link from 'next/link'
import NavClinic from '@/components/NavClinic'
import FooterClinic from '@/components/FooterClinic'
import SiteEffects from '@/components/SiteEffects'

export const metadata: Metadata = {
  title: 'Ninto',
  description: 'Terms and conditions governing clinic use of the Ninto platform.',
}

export default function ClinicTermsPage() {
  return (
    <>
      <NavClinic />
      <SiteEffects />

      <section className="tc-hero">
        <div className="tc-hero-bg" aria-hidden="true">
          <img src="/Shared/hero%20bg.png" alt="" />
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
