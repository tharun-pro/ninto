import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { table } from '@sanity/table'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'ninto',
  title: 'Ninto CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fnz75tfn',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'blogs',
  basePath: '/studio',
  plugins: [
    table(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Patient Blogs')
              .child(
                S.documentList()
                  .title('Patient Blogs')
                  .filter('_type == "post" && postType == "patient"')
              ),
            S.listItem()
              .title('Clinic Blogs')
              .child(
                S.documentList()
                  .title('Clinic Blogs')
                  .filter('_type == "post" && postType == "clinic"')
              ),
            S.divider(),
            S.documentTypeListItem('category').title('Categories'),
            S.documentTypeListItem('author').title('Authors'),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
})
