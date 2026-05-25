'use client'

import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const SLIDE_MS = 300   // new page slides up
const FADE_MS  = 80    // old page fades out (brief, just for feedback)

export default function PageTransitionManager({ children }: { children: React.ReactNode }) {
  const router   = useRouter()
  const pathname = usePathname()

  const pageRef   = useRef<HTMLDivElement>(null)
  const mounted   = useRef(false)
  const animating = useRef(false)
  const rids      = useRef<number[]>([])
  const tid       = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancel = useCallback(() => {
    rids.current.forEach(cancelAnimationFrame)
    rids.current = []
    if (tid.current) { clearTimeout(tid.current); tid.current = null }
  }, [])

  const done = useCallback(() => {
    const p = pageRef.current
    if (p) {
      p.style.transform  = ''
      p.style.transition = ''
      p.style.willChange = ''
      p.style.boxShadow  = ''
      p.style.opacity    = ''
    }
    document.documentElement.style.overflow = ''
    document.body.style.overflow            = ''
    animating.current = false
  }, [])

  // ─────────────────────────────────────────────────────────────────
  // Fires synchronously BEFORE the browser paints after React commits
  // the new page content. Pins the new page below the viewport, then
  // slides it up — content is fully rendered before any paint,
  // so the arriving screen always shows white bg + content together.
  // ─────────────────────────────────────────────────────────────────
  useLayoutEffect(() => {
    if (!mounted.current) { mounted.current = true; return }
    if (!animating.current) return

    const p = pageRef.current
    if (!p) return
    cancel()

    // Snap new page below viewport (before browser paints — no blank flash)
    p.style.willChange = 'transform'
    p.style.transition = 'none'
    p.style.opacity    = '1'
    p.style.transform  = 'translate3d(0, 100%, 0)'
    p.style.boxShadow  = '0 -24px 80px rgba(0,0,0,0.08), 0 -4px 24px rgba(0,0,0,0.05)'

    // Frame 1 → commit off-screen position. Frame 2 → animate.
    const r1 = requestAnimationFrame(() => {
      const r2 = requestAnimationFrame(() => {
        p.style.transition = `transform ${SLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
        p.style.transform  = 'translate3d(0, 0, 0)'
        tid.current = setTimeout(done, SLIDE_MS + 30)
      })
      rids.current = [r2]
    })
    rids.current = [r1]

    return cancel
  }, [pathname, cancel, done])

  // ─────────────────────────────────────────────────────────────────
  // Global click interceptor — captures every anchor click.
  // Skips: modifier keys, external links, blank targets, hash-only,
  // same-page navigation (path + search unchanged), studio routes.
  // ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href]')
      if (!a || a.target === '_blank') return

      const raw = a.getAttribute('href') ?? ''
      if (raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:')) return

      let to: string
      try {
        const u = new URL(a.href, location.origin)
        if (u.origin !== location.origin) return
        if (u.pathname.startsWith('/studio')) return
        if (u.pathname.startsWith('/blogs') || u.pathname.startsWith('/clinic/blogs')) return
        // Skip if only the hash is changing (same-page scroll, handled by SiteEffects)
        if (u.pathname === pathname && u.search === location.search) return
        to = u.pathname + u.search + u.hash
      } catch { return }

      e.preventDefault()
      if (animating.current) return

      const p = pageRef.current
      if (!p) return

      animating.current = true

      // Immediately fade current page — gives instant click feedback
      p.style.transition = `opacity ${FADE_MS}ms ease`
      p.style.opacity    = '0'

      // Lock scroll on both root elements (covers iOS Safari)
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow            = 'hidden'

      // Navigate partway through the fade so transitions overlap cleanly
      setTimeout(() => {
        document.documentElement.scrollTop = 0
        document.body.scrollTop            = 0
        router.push(to)
      }, FADE_MS * 0.5)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [router, pathname])

  return (
    <div
      ref={pageRef}
      style={{
        position:   'relative',
        zIndex:     1,
        minHeight:  '100vh',
        background: '#fff',  // solid white — new page is never transparent during slide
        willChange: 'auto',
      }}
    >
      {children}
    </div>
  )
}
