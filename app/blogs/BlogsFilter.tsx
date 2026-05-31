import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import type { SanityPost } from '@/lib/sanity'

export default function BlogsFilter({ posts, basePath = '/blogs' }: { posts: SanityPost[], basePath?: string }) {
  const visible = posts.filter((p) => p.postType !== 'clinic')

  return (
    <div className="bl-posts-grid bl-posts-grid--listing">
      {visible.length > 0 ? visible.map((post) => (
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
          </div>
        </Link>
      )) : (
        <p style={{ color: '#888', gridColumn: '1/-1', textAlign: 'center', padding: '48px 0' }}>No posts yet.</p>
      )}
    </div>
  )
}
