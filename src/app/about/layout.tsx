import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Zyra | Global AI Content Studio",
  description:
    "Zyra is a global AI content studio. We build AI-native film, brand content, and micro drama for brands that want to move at the speed of culture.",
  openGraph: {
    title: 'About Zyra | AI Content Studio India',
    description: "Meet the team behind India's premier AI content studio.",
    url: 'https://www.thezyra.in/about',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://www.thezyra.in/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
