import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Brand Film Portfolio India | Zyra',
  description:
    "Explore Zyra's portfolio of AI-powered brand films, OTT content, micro dramas and performance creatives. Work for Adani, Cars24, Swiggy, NDTV and more.",
  openGraph: {
    title: 'AI Brand Film Portfolio | Zyra',
    description: "AI-powered brand films and content for India's top brands.",
    url: 'https://www.thezyra.in/work',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://www.thezyra.in/work' },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
