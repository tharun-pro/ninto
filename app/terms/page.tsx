import type { Metadata } from 'next'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Ninto',
  description: 'Welcome to Ninto. This document is a legally binding electronic agreement under the Indian Information Technology Act, 2000.',
}

export default function TermsPage() {
  return (
    <>
      <NavPatient />
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
              Welcome to Ninto. This document is a legally binding electronic agreement under the Indian Information Technology Act, 2000. By accessing our platform, you agree to these terms, which govern the relationship between you (the User) and Ninto.
            </p>
          </div>
        </div>
      </section>

      <div className="tc-content">
        <div className="tc-sections">
          <div className="tc-section">
            <h2 className="tc-section-title">Eligibility &amp; account integrity.</h2>
            <p className="tc-section-body">To use Ninto, you must be at least 18 years old and legally competent. Registration is currently free, but it requires absolute accuracy. By creating a profile, you commit to providing truthful information and maintaining the strict confidentiality of your login credentials. We reserve the right to verify professional credentials and suspend any accounts that provide misleading or inaccurate data.</p>
          </div>
          <div className="tc-section">
            <h2 className="tc-section-title">User obligations &amp; conduct.</h2>
            <p className="tc-section-body">The Ninto platform is built on mutual respect and legality. Users agree to use our services solely for lawful purposes, respecting the intellectual property rights of Ninto and its licensors. You may not reverse-engineer the software, impersonate other professionals, or upload harmful content. Any activity that disrupts the platform&apos;s functionality or interferes with other users&apos; access is strictly prohibited.</p>
          </div>
          <div className="tc-section">
            <h2 className="tc-section-title">Clinical &amp; medical disclaimer.</h2>
            <p className="tc-section-body">Ninto is a technology facilitator, not a medical provider. Our platform is designed for record management and professional connectivity; it is never a substitute for in-person medical consultation or emergency services. Any health information found on the platform is for general guidance only. In the event of a medical emergency, please contact local emergency services immediately.</p>
          </div>
          <div className="tc-section">
            <h2 className="tc-section-title">Liability &amp; data protection.</h2>
            <p className="tc-section-body">While we employ industry-standard encryption to protect your data, Ninto is not liable for service interruptions caused by internet failures or third-party unauthorized access beyond our control. Your data usage is governed by our Privacy Policy. In the event of dissatisfaction, your sole remedy is to discontinue use. We also maintain a strict no-refund policy for all final purchases made on the platform.</p>
          </div>
          <div className="tc-section">
            <h2 className="tc-section-title">Resolving disputes &amp; updates.</h2>
            <p className="tc-section-body">We aim to solve all issues amicably through a two-step process: initial mediation followed by binding arbitration under Indian law. Ninto reserves the right to modify these terms at any time; continued use of the platform after updates constitutes your acceptance of the new terms. For any grievances, please reach out to our support team via our official website.<br /><br /><strong>Final Note:</strong> By using the Ninto platform, you acknowledge that you have read, understood, and agreed to these Terms &amp; Conditions in their entirety.</p>
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
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">Can we use the application without ABHA address?</p>
                <p className="f-faq-a">Yes, you can use Ninto without an ABHA address. However, linking your ABHA ID unlocks features like nationwide record sharing and government health scheme integration.</p>
              </div>
              <i className="ti ti-chevron-down f-faq-icon"></i>
            </div>
          </div>
          <div className="f-faq-item">
            <div className="f-faq-divider"></div>
            <div className="f-faq-row">
              <div className="f-faq-text">
                <p className="f-faq-q">How many accounts can be created in one profile?</p>
                <p className="f-faq-a">A single Ninto profile supports up to 6 linked family member accounts, making it easy for caregivers to manage health records for their entire household from one login.</p>
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
