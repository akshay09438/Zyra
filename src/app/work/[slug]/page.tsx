import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ALL_PROJECTS, getProjectBySlug } from '@/lib/work-data'
import { WorkProjectClient } from './WorkProjectClient'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title}, ${project.client} | Zyra AI`,
    description: project.brief,
    openGraph: {
      title: `${project.title} | Zyra AI`,
      description: project.brief,
      url: `https://www.thezyra.in/work/${project.slug}`,
      images: [{ url: project.poster.startsWith('/') ? project.poster : `/assets/og-image.jpg`, width: 1200, height: 630 }],
    },
    alternates: { canonical: `https://www.thezyra.in/work/${project.slug}` },
  }
}

export default async function WorkProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const others = ALL_PROJECTS.filter(p => p.slug !== slug).slice(0, 3)

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.brief,
    url: `https://www.thezyra.in/work/${project.slug}`,
    image: project.poster.startsWith('/') ? `https://www.thezyra.in${project.poster}` : project.poster,
    creator: {
      '@type': 'Organization',
      name: 'Zyra',
      url: 'https://www.thezyra.in',
    },
    contributor: {
      '@type': 'Organization',
      name: project.client,
    },
    dateCreated: project.year,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <WorkProjectClient project={project} others={others} />
    </>
  )
}
