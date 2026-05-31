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
  title: 'Ninto',
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
          <img src="/Shared/hero%20bg.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
