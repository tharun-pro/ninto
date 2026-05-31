import type { Metadata } from 'next'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'

export const metadata: Metadata = {
  title: 'Ninto',
  description: 'At Ninto, your health journey is personal, and so is your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <NavPatient />
      <SiteEffects />

      <section className="pp-hero">
        <div className="pp-hero-bg" aria-hidden="true">
          <img src="/Shared/hero%20bg.png" alt="" />
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
              At Ninto, your health journey is personal, and so is your data. We are committed to transparency, security, and the protection of your medical and personal information under the Indian IT Act, 2000 and GDPR standards.
            </p>
          </div>
        </div>
      </section>

      <div className="pp-content">
        <div className="pp-sections">
          <div className="pp-section">
            <h2 className="pp-section-title">What we collect.</h2>
            <p className="pp-section-body">To provide a seamless healthcare experience, we collect Personal Information such as your identity, financial details, and sensitive medical history. We also gather Non-Personal Information like device usage and IP addresses to optimize performance. To function fully, Ninto requires specific app permissions including camera access, location, and secure external storage for your documents.</p>
          </div>
          <div className="pp-section">
            <h2 className="pp-section-title">How we use it.</h2>
            <p className="pp-section-body">Your data isn&apos;t just numbers; it&apos;s the key to better care. We use your information to facilitate connections with healthcare professionals, process secure payments, and personalize your experience. Beyond the basics, we analyze platform behavior to improve our tools, protect the integrity of our community, and ensure we remain fully compliant with global legal obligations.</p>
          </div>
          <div className="pp-section">
            <h2 className="pp-section-title">Your rights &amp; control.</h2>
            <p className="pp-section-body">You are the owner of your data. Under GDPR and local regulations, you have the right to request a copy of your records, correct inaccuracies, or withdraw your consent at any time. We believe in total autonomy; whether you want to download your entire data history or request a permanent deletion of your account, our team is ready to assist you through a simple email request.</p>
          </div>
          <div className="pp-section">
            <h2 className="pp-section-title">Security &amp; confidentiality.</h2>
            <p className="pp-section-body">Security is woven into our architecture. All data is encrypted during transmission and at rest using rigorous technical and physical safeguards. Your information is treated as strictly confidential; we do not sell or rent your identity to third parties. While we employ industry-leading protection, we maintain a policy of radical transparency, promising to notify you immediately in the rare event of a security breach.</p>
          </div>
          <div className="pp-section">
            <h2 className="pp-section-title">Sharing &amp; transparency.</h2>
            <p className="pp-section-body">Information is only shared when it serves your care&mdash;such as with authorized service providers, financial partners, or during essential corporate restructures. When data moves across borders, we enforce strict contractual protections. We encourage you to be mindful of external links within the platform, as third-party sites operate under their own privacy standards.</p>
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
