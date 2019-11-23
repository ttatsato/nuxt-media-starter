<template>
  <div>
    <ArticleTemplate>
      <div slot="mainContent">
        <div
          v-for="post in posts"
          class="tile is-parent">
          <article
            @click="$router.push('/contentful/' + post.fields.slug)"
            class="tile is-child box">
            <p class="title">{{post.fields.title}}</p>
            <p class="subtitle">{{post.fields.description}}</p>
          </article>
        </div>
      </div>
    </ArticleTemplate>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import ArticleTemplate from "../components/Templates/ArticleTemplate";
  import {fetchEntries} from "@/api/contentful";

  const client = createClient()

  export default {
    components: {ArticleTemplate},
    // `env` is available in the context object
    async asyncData () {
      const posts = await fetchEntries()
      return {
        posts: posts
      }
    }
  }
</script>
<style lang="sass" scoped>
  .tile.is-parent
    cursor: pointer
    &:hover
      opacity: 0.7
</style>
