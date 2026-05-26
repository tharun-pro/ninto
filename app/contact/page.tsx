'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import NavPatient from '@/components/NavPatient'
import FooterPatient from '@/components/FooterPatient'
import SiteEffects from '@/components/SiteEffects'

export default function ContactPage() {
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
        body: JSON.stringify({ name, phone, email, description }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <NavPatient />
      <SiteEffects />

      <main className="ct-main">
        <div className="ct-left">
          <div className="ct-left-top">
            <h1 className="ct-heading">
              Support starts with
              <span className="green">simple step.</span>
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
            <p className="ct-form-title">Tell us about you.</p>
            <p className="ct-form-subtitle">We will only use this phone number to send an invite<br />for the beta once it&apos;s live. No spam.</p>
          </div>

          {status !== 'success' && (
            <form className="ct-form" ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="ct-field">
                <label htmlFor="ct-name">Name</label>
                <input type="text" id="ct-name" name="name" placeholder="Sam J" autoComplete="name" onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              <div className="ct-field">
                <label htmlFor="ct-phone">Phone number</label>
                <input type="tel" id="ct-phone" name="phone" placeholder="+91 99999 99999" autoComplete="tel" onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              <div className="ct-field">
                <label htmlFor="ct-email">E-mail</label>
                <input type="email" id="ct-email" name="email" placeholder="sam@gmail.com" autoComplete="email" onFocus={handleFocus} onBlur={handleBlur} />
              </div>
              <div className="ct-field">
                <label htmlFor="ct-desc">Description</label>
                <textarea id="ct-desc" name="description" rows={2} placeholder="Hello Ninto" onFocus={handleFocus} onBlur={handleBlur} />
              </div>
            </form>
          )}

          {status === 'success' && (
            <div className="ct-success visible" role="alert">
              <p className="ct-success-title">Thank you! Your details have been submitted successfully.</p>
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
              form="contactForm"
              className="ct-submit"
              disabled={status === 'submitting'}
              onClick={() => formRef.current?.requestSubmit()}
            >
              <span className="btn-dot btn-dot-l"></span>
              <span className="btn-inner">
                <span className="btn-txt">{status === 'submitting' ? 'Submitting...' : 'Get in Touch'}</span>
                <span className="btn-dot btn-dot-r"></span>
              </span>
            </button>
          )}
        </div>
      </main>

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
