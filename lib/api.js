import { createClient } from 'contentful'

const client = createClient({
  space: process.env.NEXT_EXAMPLE_CMS_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_EXAMPLE_CMS_CONTENTFUL_ACCESS_TOKEN,
})

const previewClient = createClient({
  space: process.env.NEXT_EXAMPLE_CMS_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_EXAMPLE_CMS_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
})

const getClient = preview => (preview ? previewClient : client)

function replaceUndefined(object) {
  if (typeof object !== 'object') {
    return value
  }

  const formatted = {}
  Object.entries(object).forEach(([key, value]) => {
    if (value === undefined) {
      formatted[key] = null
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        formatted[key] = value.map(replaceUndefined)
      } else {
        formatted[key] = replaceUndefined(value)
      }
    } else {
      formatted[key] = value
    }
  })

  return formatted
}

function parsePost({ fields }) {
  return replaceUndefined({
    title: fields.title,
    slug: fields.slug,
    date: fields.date,
    content: fields.content,
    excerpt: fields.excerpt,
    coverImage: fields.coverImage?.fields.file,
  })
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb)
}

export async function getPreviewPostBySlug(slug) {
  const entries = await getClient(true).getEntries({
    content_type: 'post',
    limit: 1,
    'fields.slug[in]': slug,
  })
  return parsePostEntries(entries)[0]
}

export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: 'post',
    select: 'fields.slug',
  })
  return parsePostEntries(entries, post => post.fields)
}

export async function getAllPostsForHome(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: 'post',
    order: '-fields.date',
  })
  return parsePostEntries(entries)
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await getClient(preview).getEntries({
    content_type: 'post',
    limit: 1,
    'fields.slug[in]': slug,
  })
  const entries = await getClient(preview).getEntries({
    content_type: 'post',
    limit: 2,
    order: '-fields.date',
    'fields.slug[nin]': slug,
  })

  return {
    post: parsePostEntries(entry)[0],
    morePosts: parsePostEntries(entries),
  }
}
