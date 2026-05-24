'use client'

import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const SLIDE_MS = 680   // new page slide-up duration
const FADE_MS  = 180   // old page fade-out duration

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
    animating.current = false
  }, [])

  // ─────────────────────────────────────────────────────────────────
  // Fires synchronously BEFORE the browser paints after React commits
  // the new page content. Pins the new page below the viewport, then
  // slides it up — content is already there, no blank state.
  // ─────────────────────────────────────────────────────────────────
  useLayoutEffect(() => {
    if (!mounted.current) { mounted.current = true; return }
    if (!animating.current) return

    const p = pageRef.current
    if (!p) return
    cancel()

    // Snap new page below viewport & make fully opaque (before any paint)
    p.style.willChange = 'transform'
    p.style.transition = 'none'
    p.style.opacity    = '1'
    p.style.transform  = 'translate3d(0, 100%, 0)'
    p.style.boxShadow  = '0 -20px 60px rgba(0,0,0,0.10), 0 -4px 20px rgba(0,0,0,0.06)'

    // Frame 1 → commit off-screen position. Frame 2 → start animation.
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
  // Global click interceptor.
  // On click: immediately fade the current page out, then navigate.
  // The fade gives instant visual feedback and the useLayoutEffect
  // above handles the slide-in of the new page when it's ready.
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
        if (u.pathname === pathname && !u.search && !u.hash) return
        to = u.pathname + u.search + u.hash
      } catch { return }

      e.preventDefault()
      if (animating.current) return

      const p = pageRef.current
      if (!p) return

      animating.current = true

      // 1. Fade current page out immediately (gives instant feedback)
      p.style.transition = `opacity ${FADE_MS}ms ease`
      p.style.opacity    = '0'

      // 2. Lock scroll during transition
      document.documentElement.style.overflow = 'hidden'

      // 3. Navigate partway through the fade so they overlap
      setTimeout(() => {
        document.documentElement.scrollTop = 0
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
        background: '#fff',      // solid bg prevents see-through during fade
        willChange: 'auto',
      }}
    >
      {children}
    </div>
  )
}
