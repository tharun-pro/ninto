'use client'

import { useEffect } from 'react'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static'

export default function StudioPage() {
  useEffect(() => {
    document.body.classList.add('no-custom-cursor')
    return () => document.body.classList.remove('no-custom-cursor')
  }, [])

  return <NextStudio config={config} />
}
