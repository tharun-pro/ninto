import type { Metadata } from 'next'
import Link from 'next/link'
import NavClinic from '@/components/NavClinic'
import FooterClinic from '@/components/FooterClinic'
import SiteEffects from '@/components/SiteEffects'
import { sanityFetch } from '@/lib/sanity'
import { allPostsQuery } from '@/lib/queries'
import type { SanityPost } from '@/lib/sanity'
import BlogsFilter from '@/app/blogs/BlogsFilter'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Clinic Blogs — Ninto',
  description: 'Expert guides on ABDM onboarding, EMR best practices, digital consent, and growing your clinic\'s digital footprint.',
}

export default async function ClinicBlogsPage() {
  let posts: SanityPost[] = []
  try {
    posts = await sanityFetch<SanityPost[]>(allPostsQuery)
  } catch {}

  return (
    <>
      <NavClinic />
      <SiteEffects />

      <section className="bl-hero">
        <div className="bl-hero-bg" aria-hidden="true">
          <img src="/Shared/hero%20bg.png" alt="" />
        </div>
        <div className="bl-hero-inner">
          <div className="bl-hero-top">
            <h1 className="bl-hero-heading">
              <span className="green">Clinic Blogs,</span>
              <span className="dark">Our Purpose.</span>
            </h1>
            <span className="bl-hero-label">Blogs</span>
          </div>
          <div className="bl-hero-bottom">
            <p className="bl-hero-body">
              Expert guides on ABDM onboarding, EMR best practices, digital consent, and growing your clinic&apos;s digital footprint.
            </p>
          </div>
        </div>
      </section>

      <section className="bl-grid-section">
        <div className="bl-grid-header">
          <p className="bl-grid-label">clinic blog</p>
          <h2 className="bl-grid-title">Clinic blogs <span className="green">for you</span></h2>
          <p className="bl-grid-desc">Expert guides on ABDM onboarding, EMR best practices, digital consent, and growing your clinic&apos;s digital footprint.</p>
        </div>

        <BlogsFilter posts={posts} basePath="/clinic/blogs" />
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
