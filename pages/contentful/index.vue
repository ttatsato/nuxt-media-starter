<template>
  <div>
    <div
      v-for="post in posts"
      class="tile is-parent">
      <article
        @click="$router.push('/contentful/' + post.sys.id)"
        class="tile is-child box">
        <p class="title">{{post.fields.title}}</p>
        <p class="subtitle">{{post.fields.description}}</p>
      </article>
    </div>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({env}) {
      client.getEntry({
        id: '31TNnjHlfaGUoMOwU0M2og'
      })
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          posts: posts.items
        }
      }).catch(console.error)
    }
  }
</script>
