import type { Metadata } from 'next'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'

export const metadata: Metadata = {
  title: 'Ninto',
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
