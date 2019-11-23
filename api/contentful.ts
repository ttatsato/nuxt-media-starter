import {createClient} from '~/plugins/contentful.js'
const marked = require('marked')

const client = createClient()

export const fetchEntries = async () :Promise<Array<object>> => {
  const posts = await client.getEntries({
    'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
    order: '-sys.createdAt'
  })
  return posts.items
}

export const fetchEntryBySlug = async (slug: string):Promise<{ title: any; body: string; updatedAt: any; authorName: any; }> => {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug[match]': slug,
    include: 3,
  })
  console.log(response)
  const fields = response.items[0].fields
  const sys = response.items[0].sys
  return {
    title: fields.title,
    body: marked(fields.body),
    updatedAt: sys.updatedAt,
    authorName: fields.author.fields.name
  }
}
