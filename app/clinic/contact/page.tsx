'use client'

import { useState, useRef } from 'react'
import NavClinic from '@/components/NavClinic'
import FooterClinic from '@/components/FooterClinic'
import SiteEffects from '@/components/SiteEffects'

export default function ClinicContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.closest('.ct-field')?.classList.add('f-active')
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.currentTarget.value.trim()) {
      e.currentTarget.closest('.ct-field')?.classList.remove('f-active')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') as string).trim()
    const phone = (data.get('phone') as string).trim()
    const email = (data.get('email') as string).trim()
    const description = (data.get('description') as string).trim()

    let valid = true
    form.querySelectorAll('.ct-field').forEach(f => f.classList.remove('f-error'))

    if (!name) { form.querySelector('#ct-name')?.closest('.ct-field')?.classList.add('f-error'); valid = false }
    if (!/^\+?\d{10}$/.test(phone)) { form.querySelector('#ct-phone')?.closest('.ct-field')?.classList.add('f-error'); valid = false }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { form.querySelector('#ct-email')?.closest('.ct-field')?.classList.add('f-error'); valid = false }
    if (!description) { form.querySelector('#ct-desc')?.closest('.ct-field')?.classList.add('f-error'); valid = false }

    if (!valid) return

    setStatus('submitting')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, description, type: 'clinic' }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <NavClinic />
      <SiteEffects />

      <main className="ct-main">
        <div className="ct-left">
          <div className="ct-left-top">
            <h1 className="ct-heading">
              Bring your clinic<br />
              <span className="green">onto Ninto.</span>
            </h1>
            <div className="ct-body">
              <p>Interested in what we offer?</p>
              <p>Sign up for a <strong>closed beta</strong>!</p>
            </div>
          </div>
          <div className="ct-left-bottom">
            <p className="ct-social-note">Prefer to chat first? Send us a mail or connect with us<br />on social &mdash; we&apos;re always happy to help.</p>
            <div className="ct-socials">
              <a href="#" className="ct-social-btn" aria-label="LinkedIn"><i className="ti ti-brand-linkedin"></i></a>
              <a href="#" className="ct-social-btn" aria-label="X"><i className="ti ti-brand-x"></i></a>
              <a href="#" className="ct-social-btn" aria-label="Instagram"><i className="ti ti-brand-instagram"></i></a>
              <a href="#" className="ct-social-btn" aria-label="Facebook"><i className="ti ti-brand-facebook"></i></a>
            </div>
          </div>
        </div>

        <div className="ct-right">
          <div className="ct-form-head">
            <p className="ct-form-title">Tell us about your clinic.</p>
            <p className="ct-form-subtitle">We will use this to onboard your clinic to our closed beta.<br />No spam.</p>
          </div>

          {status !== 'success' && (
            <form className="ct-form" ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="ct-field">
                <label htmlFor="ct-name">Name</label>
                <input type="text" id="ct-name" name="name" placeholder="Dr. Sam J" autoComplete="name" onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              <div className="ct-field">
                <label htmlFor="ct-phone">Phone number</label>
                <input type="tel" id="ct-phone" name="phone" placeholder="+91 99999 99999" autoComplete="tel" onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              <div className="ct-field">
                <label htmlFor="ct-email">E-mail</label>
                <input type="email" id="ct-email" name="email" placeholder="clinic@gmail.com" autoComplete="email" onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              <div className="ct-field">
                <label htmlFor="ct-desc">Clinic description</label>
                <textarea id="ct-desc" name="description" rows={2} placeholder="Tell us about your clinic..." onFocus={handleFocus} onBlur={handleBlur} />
              </div>
            </form>
          )}

          {status === 'success' && (
            <div className="ct-success visible" role="alert">
              <p className="ct-success-title">Thank you! We&apos;ll be in touch about your clinic onboarding.</p>
            </div>
          )}

          {status === 'error' && (
            <div className="ct-error visible" role="alert">
              <p className="ct-error-title">Something went wrong. Please try again.</p>
            </div>
          )}

          {status !== 'success' && (
            <button
              type="submit"
              className="ct-submit"
              disabled={status === 'submitting'}
              onClick={() => formRef.current?.requestSubmit()}
            >
              {status === 'submitting' ? 'Submitting...' : 'Get Started'}
            </button>
          )}
        </div>
      </main>

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
