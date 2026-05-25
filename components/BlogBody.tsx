'use client'

import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="art-section-body" style={{ margin: 0 }}>{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="art-section-title" style={{ marginTop: 40, marginBottom: 0 }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.2, color: '#4e4e4e', margin: '4px 0 0' }}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.3, color: '#4e4e4e', margin: '4px 0 0' }}>{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: '3px solid #00a000', paddingLeft: 16, margin: 0, fontStyle: 'italic', color: '#6b6b6b', lineHeight: 1.6 }}>
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul style={{ paddingLeft: 24, margin: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 8, listStyleType: 'disc' }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol style={{ paddingLeft: 24, margin: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 8, listStyleType: 'decimal' }}>
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li style={{ fontSize: 16, lineHeight: 1.7, color: '#4e4e4e', fontWeight: 400 }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ fontSize: 16, lineHeight: 1.7, color: '#4e4e4e', fontWeight: 400 }}>{children}</li>
    ),
  },

  marks: {
    strong:    ({ children }) => <strong style={{ fontWeight: 600 }}>{children}</strong>,
    em:        ({ children }) => <em style={{ fontStyle: 'italic' }}>{children}</em>,
    underline: ({ children }) => <span style={{ textDecoration: 'underline' }}>{children}</span>,
    'strike-through': ({ children }) => <s>{children}</s>,
    code: ({ children }) => (
      <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4, fontSize: 14, fontFamily: 'monospace', color: '#374151' }}>
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        style={{ color: '#00a000', textDecoration: 'underline' }}
      >
        {children}
      </a>
    ),
  },

  types: {
    image: ({ value }) => (
      <figure style={{ margin: 0 }}>
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt ?? ''}
          style={{ width: '100%', borderRadius: 8, display: 'block' }}
        />
        {value.caption && (
          <figcaption style={{ fontSize: 13, color: '#959595', marginTop: 8, textAlign: 'center', lineHeight: 1.4 }}>
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    table: ({ value }) => {
      const rows: { _key?: string; cells?: string[] }[] = value?.rows ?? []
      if (!rows.length) return null
      return (
        <div style={{ overflowX: 'auto', marginTop: 8 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, color: '#4e4e4e' }}>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={row._key ?? ri} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  {(row.cells ?? []).map((cell, ci) => (
                    ri === 0 ? (
                      <th key={ci} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, background: '#f9fafb', borderRight: '1px solid #e5e7eb', whiteSpace: 'nowrap' }}>
                        {cell}
                      </th>
                    ) : (
                      <td key={ci} style={{ padding: '10px 14px', borderRight: '1px solid #e5e7eb', lineHeight: 1.6 }}>
                        {cell}
                      </td>
                    )
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    },
  },
}

export default function BlogBody({ body }: { body: any[] }) {
  if (!body?.length) return null
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <PortableText value={body} components={components} />
    </div>
  )
}
