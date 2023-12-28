/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.{md,mdx}',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    image: { type: 'string', required: true },
    imageAuthorName: { type: 'string', required: true },
    imageProviderName: { type: 'string', required: true },
    imageAuthorLink: { type: 'string', required: true },
    imageProviderLink: { type: 'string', required: true }
  },
  computedFields: {
    readingTime: {
      type: 'json',
      resolve: (doc) => Math.ceil(readingTime(doc.body.raw).minutes)
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, '')
    }
  }
}));

export default makeSource({
  contentDirPath: './posts',
  documentTypes: [Post],
  onExtraFieldData: 'ignore',
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted'];
          }
        }
      ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ]
  }
});
