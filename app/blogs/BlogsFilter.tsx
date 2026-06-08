import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import type { SanityPost } from '@/lib/sanity'

export default function BlogsFilter({ posts, basePath = '/blogs' }: { posts: SanityPost[], basePath?: string }) {
  const visible = posts.filter((p) => p.slug && p.coverImage?.asset)

  if (visible.length === 0) {
    return (
      <div className="bl-bento-wrapper">
        <p style={{ color: '#888', textAlign: 'center', padding: '48px 0' }}>No posts yet.</p>
      </div>
    )
  }

  const blocks: SanityPost[][] = []
  for (let i = 0; i < visible.length; i += 9) {
    blocks.push(visible.slice(i, i + 9))
  }

  return (
    <div className="bl-bento-wrapper">
      {blocks.map((block, blockIdx) => (
        <div key={blockIdx} className="bl-bento-block">
          {block.map((post, i) => (
            <Link href={`${basePath}/${post.slug}`} key={post._id} className={`bl-card bl-card--pos-${i + 1}`}>
              <div className="bl-card-img">
                {post.coverImage?.asset ? (
                  <img src={urlFor(post.coverImage).width(800).height(600).url()} alt={post.title} />
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
          ))}
        </div>
      ))}
    </div>
  )
}
