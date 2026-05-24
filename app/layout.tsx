import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import PageTransitionManager from '@/components/PageTransitionManager'

export const metadata: Metadata = {
  title: 'Ninto',
  description: 'Store, organize and share your family\'s medical history. ABHA-linked records, prescription tracking, and effortless sharing with doctors.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      </head>
      <body>
        <SmoothScroll />
        <PageTransitionManager>
          {children}
        </PageTransitionManager>
      </body>
    </html>
  )
}
