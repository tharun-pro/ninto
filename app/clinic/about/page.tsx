import type { Metadata } from 'next'
import Link from 'next/link'
import NavClinic from '@/components/NavClinic'
import FooterClinic from '@/components/FooterClinic'
import SiteEffects from '@/components/SiteEffects'

export const metadata: Metadata = {
  title: 'Ninto',
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
            <img src="/Shared/founder-photo.jpg" alt="Founder of Ninto" />
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
        <div className="bl-posts-grid">
          {[
            { img: '/team-blob-1.png', name: 'Bennet', role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { img: '/team-blob-2.png', name: 'Bennet', role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { img: '/team-blob-3.png', name: 'Bennet', role: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          ].map((member, i) => (
            <div className="bl-card" key={i}>
              <div className="bl-card-img">
                <img src={member.img} alt={member.name} />
                <div className="bl-card-overlay" />
              </div>
              <div className="bl-card-body">
                <h3 className="bl-card-title">{member.name}</h3>
                <p className="bl-card-desc">{member.role}</p>
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
