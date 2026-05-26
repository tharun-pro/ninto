'use client'

import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const SLIDE_MS = 100

export default function PageTransitionManager({ children }: { children: React.ReactNode }) {
  const router    = useRouter()
  const pathname  = usePathname()
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
    }
    document.getElementById('pt-ghost')?.remove()
    animating.current = false
  }, [])

  // Fires synchronously before the browser paints the new page.
  // Pins new page below viewport then slides it up over the ghost.
  useLayoutEffect(() => {
    if (!mounted.current) { mounted.current = true; return }
    if (!animating.current) return

    const p = pageRef.current
    if (!p) return
    cancel()

    p.style.willChange = 'transform'
    p.style.transition = 'none'
    p.style.transform  = 'translate3d(0, 100%, 0)'
    p.style.boxShadow  = '0 -24px 80px rgba(0,0,0,0.08), 0 -4px 24px rgba(0,0,0,0.05)'

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
        if (u.pathname === pathname && u.search === location.search) return
        to = u.pathname + u.search + u.hash
      } catch { return }

      e.preventDefault()
      if (animating.current) return

      const p = pageRef.current
      if (!p) return

      animating.current = true

      // Pin a plain white cover so the old page stays visible while the new
      // page slides up from below.
      const ghost = document.createElement('div')
      ghost.id = 'pt-ghost'
      Object.assign(ghost.style, {
        position:      'fixed',
        inset:         '0',
        zIndex:        '0',
        pointerEvents: 'none',
        background:    '#fff',
      })
      document.body.appendChild(ghost)

      router.push(to)
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
        background: '#fff',
        willChange: 'auto',
      }}
    >
      {children}
    </div>
  )
}
