'use client'

import { useState } from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import type { SanityPost } from '@/lib/sanity'

type Tab = 'all' | 'patient' | 'clinic'

export default function BlogsFilter({ posts, basePath = '/blogs' }: { posts: SanityPost[], basePath?: string }) {
  const [tab, setTab] = useState<Tab>('all')

  const filtered = tab === 'all' ? posts : posts.filter((p) => p.postType === tab)

  return (
    <>
      <div className="bl-filter-tabs">
        <button className={`bl-filter-tab${tab === 'all' ? ' active' : ''}`} onClick={() => setTab('all')}>All</button>
        <button className={`bl-filter-tab${tab === 'patient' ? ' active' : ''}`} onClick={() => setTab('patient')}>For Patients</button>
        <button className={`bl-filter-tab${tab === 'clinic' ? ' active' : ''}`} onClick={() => setTab('clinic')}>For Professionals</button>
      </div>

      <div className="bl-posts-grid">
        {filtered.length > 0 ? filtered.map((post) => (
          <Link href={`${basePath}/${post.slug}`} key={post._id} className="bl-card">
            <div className="bl-card-img">
              {post.coverImage?.asset ? (
                <img src={urlFor(post.coverImage).width(600).height(450).url()} alt={post.title} />
              ) : (
                <img src="/blog-thumb-bg.png" alt="" />
              )}
              <div className="bl-card-overlay" />
            </div>
            <div className="bl-card-arrow" aria-hidden="true"><i className="ti ti-arrow-up-right" /></div>
            <div className="bl-card-body">
              {post.category && <span className="bl-card-tag">{post.category}</span>}
              <h3 className="bl-card-title">{post.title}</h3>
              {post.excerpt && <p className="bl-card-desc">{post.excerpt}</p>}
            </div>
          </Link>
        )) : (
          <p style={{ color: '#888', gridColumn: '1/-1', textAlign: 'center', padding: '48px 0' }}>No posts yet.</p>
        )}
      </div>
    </>
  )
}
