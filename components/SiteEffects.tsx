'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SiteEffects() {
  const pathname = usePathname()

  useEffect(() => {
    // ── Custom cursor (mouse/desktop only) ──
    const isTouch = !window.matchMedia('(pointer: fine)').matches
    if (isTouch) {
      document.body.classList.add('no-custom-cursor')
      return
    }

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
      tag(document.querySelector('.f-ready-left'),        'sa-left',  0)
      tag(document.querySelector('.f-ready-right'),       'sa-right', 1)
      tag(document.querySelector('.f-testimonials-header'), 'sa-up', 0)
      tag(document.querySelector('.f-users-header'),      'sa-up', 0)
      tag(document.querySelector('.f-clinics-header'),    'sa-up', 0)
      tag(document.querySelector('.f-benefits-left'),     'sa-left', 0)
      tag(document.querySelector('.f-benefits-mock'),     'sa-right', 1)
      tag(document.querySelector('.f-faq-left'),          'sa-left', 0)
      tag(document.querySelector('.bl-filter-tabs'),      'sa-up', 1)
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
    // ── Intro statement letter fill on scroll ──
    const scrollEl = document.querySelector<HTMLElement>('.f-intro-scroll')
    const textEl   = document.querySelector<HTMLElement>('.f-intro-text')
    if (!scrollEl || !textEl) return

    // Split into character spans once per DOM lifetime
    if (!textEl.dataset.charSetup) {
      textEl.dataset.charSetup = '1'
      const raw = textEl.textContent ?? ''
      textEl.innerHTML = Array.from(raw).map((ch) =>
        ch === ' ' ? ' ' : `<span class="f-intro-char">${ch}</span>`
      ).join('')
    }

    const chars = Array.from(textEl.querySelectorAll<HTMLElement>('.f-intro-char'))
    if (!chars.length) return

    // smoothstep easing
    const ss = (e0: number, e1: number, x: number) => {
      const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)))
      return t * t * (3 - 2 * t)
    }

    const SPREAD = 0.18  // transition zone spans 18% of scroll range
    const n = chars.length

    const onScroll = () => {
      const rect = scrollEl.getBoundingClientRect()
      const scrollable = scrollEl.offsetHeight - window.innerHeight
      if (scrollable <= 0) return
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1)

      chars.forEach((span, i) => {
        const charProg = (i / n) * (1 - SPREAD)
        const t = ss(charProg, charProg + SPREAD, progress)
        // interpolate grey(200) → dark(78)
        const v = Math.round(200 - 122 * t)
        span.style.color = `rgb(${v},${v},${v})`
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

    const cleanup: Array<() => void> = []

    items.forEach((item) => {
      const handler = () => {
        items.forEach((i) => {
          i.classList.remove('active')
          const arr = i.querySelector<HTMLElement>('.f-user-arrow')
          if (arr) { arr.classList.remove('up'); arr.classList.add('down') }
        })
        item.classList.add('active')
        const arr = item.querySelector<HTMLElement>('.f-user-arrow')
        if (arr) { arr.classList.remove('down'); arr.classList.add('up') }
        const src = item.dataset.image
        if (imgEl && src) {
          imgEl.classList.add('fading')
          setTimeout(() => { imgEl.src = src; imgEl.classList.remove('fading') }, 350)
        }
      }
      item.addEventListener('click', handler)
      cleanup.push(() => item.removeEventListener('click', handler))
    })

    return () => cleanup.forEach((fn) => fn())
  }, [pathname])

  useEffect(() => {
    // ── Clinics accordion ──
    const items = document.querySelectorAll<HTMLElement>('.f-clinic-item')
    const imgEl = document.querySelector<HTMLImageElement>('.f-clinics-image img')
    if (!items.length) return

    const cleanup: Array<() => void> = []

    items.forEach((item) => {
      const handler = () => {
        items.forEach((i) => {
          i.classList.remove('active')
          const arr = i.querySelector<HTMLElement>('.f-clinic-arrow')
          if (arr) { arr.classList.remove('up'); arr.classList.add('down') }
        })
        item.classList.add('active')
        const arr = item.querySelector<HTMLElement>('.f-clinic-arrow')
        if (arr) { arr.classList.remove('down'); arr.classList.add('up') }
        const src = item.dataset.image
        if (imgEl && src) {
          imgEl.classList.add('fading')
          setTimeout(() => { imgEl.src = src; imgEl.classList.remove('fading') }, 350)
        }
      }
      item.addEventListener('click', handler)
      cleanup.push(() => item.removeEventListener('click', handler))
    })

    return () => cleanup.forEach((fn) => fn())
  }, [pathname])

  useEffect(() => {
    // ── FAQ accordion ──
    const items = document.querySelectorAll<HTMLElement>('.f-faq-item')
    const cleanup: Array<() => void> = []

    items.forEach((item) => {
      const answer = item.querySelector<HTMLElement>('.f-faq-a')
      const icon = item.querySelector<HTMLElement>('.f-faq-icon')
      if (!answer) return

      let wrap = item.querySelector<HTMLElement>('.f-faq-a-wrap')
      if (!wrap) {
        wrap = document.createElement('div')
        wrap.className = 'f-faq-a-wrap'
        answer.parentElement!.insertBefore(wrap, answer)
        wrap.appendChild(answer)
      }

      wrap.style.maxHeight = '0'
      wrap.style.transition = 'max-height 0.35s cubic-bezier(.22,1,.36,1)'

      const handler = () => {
        const isOpen = wrap!.style.maxHeight !== '0px' && wrap!.style.maxHeight !== '0'
        document.querySelectorAll<HTMLElement>('.f-faq-a-wrap').forEach((w) => { w.style.maxHeight = '0' })
        document.querySelectorAll<HTMLElement>('.f-faq-icon').forEach((i) => i.classList.remove('open'))
        if (!isOpen) {
          wrap!.style.maxHeight = answer.scrollHeight + 'px'
          icon?.classList.add('open')
        }
      }

      item.addEventListener('click', handler)
      cleanup.push(() => item.removeEventListener('click', handler))
    })

    return () => cleanup.forEach((fn) => fn())
  }, [pathname])

  useEffect(() => {
    // ── Smooth hash scroll (same-page and cross-page) ──
    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash) return
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    let timer: ReturnType<typeof setTimeout> | null = null
    if (window.location.hash) {
      timer = setTimeout(scrollToHash, 100)
    }

    window.addEventListener('hashchange', scrollToHash)
    return () => {
      window.removeEventListener('hashchange', scrollToHash)
      if (timer !== null) clearTimeout(timer)
    }
  }, [pathname])

  return null
}
