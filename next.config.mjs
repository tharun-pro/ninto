/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ['next-sanity', 'sanity', '@sanity/ui', '@sanity/icons', '@sanity/color'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'www.figma.com' },
    ],
  },
}

export default config
