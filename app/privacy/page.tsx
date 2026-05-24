import type { Metadata } from 'next'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'

export const metadata: Metadata = {
  title: 'Privacy Policies — Ninto',
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
