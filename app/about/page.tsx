import type { Metadata } from 'next'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'

export const metadata: Metadata = {
  title: 'Ninto',
  description: 'Stop hunting through WhatsApp chats for reports. Ninto is your personal health command center, built for the way healthcare in India actually works.',
}

export default function AboutPage() {
  return (
    <>
      <NavPatient />
      <SiteEffects />

      <section className="ab-hero">
        <div className="ab-hero-bg" aria-hidden="true">
          <img src="/Shared/hero%20bg.png" alt="" />
        </div>
        <div className="ab-hero-inner">
          <div className="ab-hero-top">
            <h1 className="ab-hero-heading">
              <span className="dark">Your medical history,</span>
              <span className="green">Synced.</span>
            </h1>
            <span className="ab-hero-label">About</span>
          </div>
          <div className="ab-hero-bottom">
            <p className="ab-hero-body">
              Stop hunting through WhatsApp chats for reports or re-explaining your history to every new doctor. Ninto is your personal health command center, built specifically for the way healthcare in India actually works.
            </p>
          </div>
        </div>
      </section>

      <section className="ab-image" aria-label="The way we help">
        <img className="ab-image-photo" src="/about-fullwidth.jpg" alt="" />
        <div className="ab-image-overlay" aria-hidden="true"></div>
        <div className="ab-image-content">
          <p className="ab-image-label">The Problem We&apos;re Solving</p>
          <p className="ab-image-text">
            Ninto is India&apos;s premier ABDM-integrated health locker app, offering secure ABHA ID management and a searchable digital timeline to streamline your family&apos;s medical records.
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
