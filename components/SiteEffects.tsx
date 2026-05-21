'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SiteEffects() {
  const pathname = usePathname()

  useEffect(() => {
    // ── Custom cursor ──
    const dot = document.createElement('div')
    dot.className = 'c-dot'
    const ring = document.createElement('div')
    ring.className = 'c-ring'
    document.body.appendChild(dot)
    document.body.appendChild(ring)

    let mx = -100, my = -100, rx = -100, ry = -100
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'; dot.style.top = my + 'px'
    }

    const HOVERABLE = 'a, button, [role="button"], input, textarea, select, label, .f-faq-row, .f-blog-item, .f-user-item'
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(HOVERABLE)) {
        dot.classList.add('is-hover'); ring.classList.add('is-hover')
      }
    }
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(HOVERABLE)) {
        dot.classList.remove('is-hover'); ring.classList.remove('is-hover')
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    const loop = () => {
      rx += (mx - rx) * 0.10
      ry += (my - ry) * 0.10
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(rafId)
      dot.remove(); ring.remove()
    }
  }, [])

  useEffect(() => {
    // ── Button dot animation ──
    document.querySelectorAll<HTMLElement>('.f-btn, .fnav-btn').forEach((btn) => {
      if (btn.dataset.dotSetup) return
      btn.dataset.dotSetup = '1'
      const content = btn.innerHTML.trim()
      btn.innerHTML =
        '<span class="btn-dot btn-dot-l"></span>' +
        '<span class="btn-inner">' +
          '<span class="btn-txt">' + content + '</span>' +
          '<span class="btn-dot btn-dot-r"></span>' +
        '</span>'
    })

    // ── Nav diagonal animation ──
    document.querySelectorAll<HTMLAnchorElement>('.fnav-links a, .f-footer-col a').forEach((link) => {
      if (link.dataset.navSetup) return
      link.dataset.navSetup = '1'
      const text = link.textContent?.trim() ?? ''
      link.innerHTML =
        '<span class="nav-out">' + text + '</span>' +
        '<span class="nav-in">'  + text + '</span>'
    })

    // ── Scroll animations ──
    const skip = ['.fnav', '.f-footer', '.hero', '.art-hero']
    const inSkip = (el: Element) => skip.some((sel) => el.closest(sel))

    const tag = (el: Element | null, anim: string, d: number) => {
      if (!el || inSkip(el) || el.classList.contains('sa')) return
      el.classList.add('sa', anim)
      if (d > 0) el.classList.add('sa-d' + Math.min(d, 6))
    }

    const tagAll = (sel: string, anim: string, stagger: boolean) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (!inSkip(el) && !el.classList.contains('sa')) {
          el.classList.add('sa', anim)
          if (stagger && i > 0) el.classList.add('sa-d' + Math.min(i, 6))
        }
      })
    }

    const alreadySetup = document.querySelectorAll('.sa').length > 0
    if (!alreadySetup) {
      document.querySelectorAll('.f-section-icon, .bl-section-icon').forEach((el) => tag(el, 'sa-scale', 0))
      document.querySelectorAll('.f-section-label, .bl-grid-label').forEach((el) => tag(el, 'sa-up', 1))
      document.querySelectorAll('.f-section-title-lg, .bl-grid-title').forEach((el) => tag(el, 'sa-up', 2))
      document.querySelectorAll('.f-section-desc, .bl-grid-desc').forEach((el) => tag(el, 'sa-up', 3))
      document.querySelectorAll('.f-btn, .bl-more, .bl-copy-more').forEach((el) => tag(el, 'sa-up', 4))
      tag(document.querySelector('.bl-hero-heading'), 'sa-up', 1)
      tag(document.querySelector('.bl-hero-label'),   'sa-up', 0)
      tag(document.querySelector('.bl-hero-body'),    'sa-up', 2)
      tagAll('.bl-card', 'sa-up', true)
      tagAll('.bl-thumb', 'sa-scale', false)
      tag(document.querySelector('.art-title'),    'sa-up', 1)
      tag(document.querySelector('.art-subtitle'), 'sa-up', 2)
      tag(document.querySelector('.art-meta'),     'sa-up', 3)
      tagAll('.art-section', 'sa-up', true)
      tag(document.querySelector('.art-hero-img'), 'sa-scale', 0)
      tag(document.querySelector('.f-about-left'),  'sa-left',  0)
      tag(document.querySelector('.f-about-imgs'),  'sa-right', 1)
      tagAll('.f-about-img-card', 'sa-scale', true)
      document.querySelectorAll('.ct-field').forEach((el, i) => tag(el, 'sa-up', (i % 4) + 1))
      tag(document.querySelector('.ct-submit'), 'sa-up', 4)
      tag(document.querySelector('.ct-left'),   'sa-left',  0)
      tag(document.querySelector('.ct-right'),  'sa-right', 1)
      document.querySelectorAll('h1:not(.sa), h2:not(.sa), h3:not(.sa)').forEach((el) => {
        if (!inSkip(el)) tag(el, 'sa-up', 1)
      })
      tagAll('.f-t-card', 'sa-up', true)
      tagAll('.f-blog-item', 'sa-up', true)
      tagAll('.f-faq-item', 'sa-up', true)
      tagAll('.f-logo-cell', 'sa-up', true)
      tag(document.querySelector('.f-ready-left'),  'sa-left',  0)
      tag(document.querySelector('.f-ready-right'), 'sa-right', 1)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sa-in')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.sa').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    // ── Nav scroll hide/show ──
    const nav = document.querySelector<HTMLElement>('.fnav')
    if (!nav) return
    let lastY = window.scrollY

    const updateNav = () => {
      const y = window.scrollY
      if (y <= 0) {
        nav.classList.remove('nav-hidden')
      } else if (y > lastY + 4) {
        nav.classList.add('nav-hidden')
      } else if (y < lastY - 4) {
        nav.classList.remove('nav-hidden')
      }
      if (y > 10) nav.classList.add('scrolled')
      else nav.classList.remove('scrolled')
      lastY = y
    }

    window.addEventListener('scroll', updateNav, { passive: true })
    return () => window.removeEventListener('scroll', updateNav)
  }, [pathname])

  useEffect(() => {
    // ── Mobile menu ──
    const hamburger = document.querySelector<HTMLElement>('.fnav-hamburger')
    const menu = document.querySelector<HTMLElement>('.mobile-menu')
    const closeBtn = document.querySelector<HTMLElement>('.mobile-menu-close')
    if (!hamburger || !menu) return

    const open = () => menu.classList.add('open')
    const close = () => menu.classList.remove('open')

    hamburger.addEventListener('click', open)
    closeBtn?.addEventListener('click', close)
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close))

    return () => {
      hamburger.removeEventListener('click', open)
      closeBtn?.removeEventListener('click', close)
    }
  }, [pathname])

  useEffect(() => {
    // ── Intro statement word fill on scroll ──
    const scrollEl = document.querySelector<HTMLElement>('.f-intro-scroll')
    const introEl  = document.querySelector<HTMLElement>('.f-intro')
    const words    = document.querySelectorAll<HTMLElement>('.f-intro-word')
    if (!scrollEl || !introEl || !words.length) return

    const onScroll = () => {
      const rect = scrollEl.getBoundingClientRect()
      const scrollable = scrollEl.offsetHeight - window.innerHeight
      if (scrollable <= 0) return
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1)
      const wordCount = words.length
      words.forEach((w, i) => {
        const fill = Math.min(Math.max((progress * wordCount - i) * 100, 0), 100)
        w.style.setProperty('--word-fill', fill + '%')
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    // ── Benefits carousel ──
    const panels = document.querySelectorAll<HTMLElement>('.f-benefits-mock-panel')
    const titleEl = document.querySelector<HTMLElement>('.f-benefits-title')
    const bodyEl  = document.querySelector<HTMLElement>('.f-benefits-body')
    const bgImg   = document.querySelector<HTMLImageElement>('#benefits-bg-img')
    const prevBtn = document.querySelector<HTMLElement>('.f-nav-circle.prev')
    const nextBtn = document.querySelector<HTMLElement>('.f-nav-circle.next')
    if (!panels.length || !prevBtn || !nextBtn) return

    const slides = [
      { title: 'Consent management', body: 'Reviewing consent requests, setting access periods, and toggling auto-approval.' },
      { title: 'Manage health locker', body: 'Upload and organise all your health documents in one place, accessible anytime.' },
      { title: 'Profile management', body: 'Manage your family profiles, track records, and stay on top of upcoming appointments.' },
    ]
    let current = 0

    const go = (idx: number) => {
      panels[current].classList.remove('active')
      current = (idx + panels.length) % panels.length
      panels[current].classList.add('active')
      if (titleEl) { titleEl.style.opacity = '0'; setTimeout(() => { titleEl.textContent = slides[current].title; titleEl.style.opacity = '1' }, 200) }
      if (bodyEl)  { bodyEl.style.opacity  = '0'; setTimeout(() => { bodyEl.textContent  = slides[current].body;  bodyEl.style.opacity  = '1' }, 200) }
    }

    const onPrev = () => go(current - 1)
    const onNext = () => go(current + 1)
    prevBtn.addEventListener('click', onPrev)
    nextBtn.addEventListener('click', onNext)
    return () => { prevBtn.removeEventListener('click', onPrev); nextBtn.removeEventListener('click', onNext) }
  }, [pathname])

  useEffect(() => {
    // ── Users accordion ──
    const items = document.querySelectorAll<HTMLElement>('.f-user-item')
    const imgEl = document.querySelector<HTMLImageElement>('.f-users-image img')
    if (!items.length) return

    items.forEach((item) => {
      item.addEventListener('click', () => {
        items.forEach((i) => i.classList.remove('active'))
        item.classList.add('active')
        const src = item.dataset.image
        if (imgEl && src) {
          imgEl.classList.add('fading')
          setTimeout(() => { imgEl.src = src; imgEl.classList.remove('fading') }, 350)
        }
      })
    })
  }, [pathname])

  useEffect(() => {
    // ── Clinics accordion ──
    const items = document.querySelectorAll<HTMLElement>('.f-clinic-item')
    const imgEl = document.querySelector<HTMLImageElement>('.f-clinics-image img')
    if (!items.length) return

    items.forEach((item) => {
      item.addEventListener('click', () => {
        items.forEach((i) => i.classList.remove('active'))
        item.classList.add('active')
        const src = item.dataset.image
        if (imgEl && src) {
          imgEl.classList.add('fading')
          setTimeout(() => { imgEl.src = src; imgEl.classList.remove('fading') }, 350)
        }
      })
    })
  }, [pathname])

  useEffect(() => {
    // ── FAQ accordion ──
    const rows = document.querySelectorAll<HTMLElement>('.f-faq-row')
    rows.forEach((row) => {
      const wrap = row.parentElement?.querySelector<HTMLElement>('.f-faq-a-wrap')
      const icon = row.querySelector<HTMLElement>('.f-faq-icon')
      const answer = wrap?.querySelector<HTMLElement>('.f-faq-a')
      if (!wrap || !answer) return

      wrap.style.maxHeight = '0'
      wrap.style.overflow = 'hidden'
      wrap.style.transition = 'max-height 0.35s cubic-bezier(.22,1,.36,1)'

      row.addEventListener('click', () => {
        const isOpen = wrap.style.maxHeight !== '0px' && wrap.style.maxHeight !== '0'
        document.querySelectorAll<HTMLElement>('.f-faq-a-wrap').forEach((w) => { w.style.maxHeight = '0' })
        document.querySelectorAll<HTMLElement>('.f-faq-icon').forEach((i) => i.classList.remove('open'))
        if (!isOpen) {
          wrap.style.maxHeight = answer.scrollHeight + 'px'
          icon?.classList.add('open')
        }
      })
    })
  }, [pathname])

  return null
}
