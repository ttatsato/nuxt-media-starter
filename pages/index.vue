<template>
  <div>
    <ArticleTemplate>
      <div slot="mainContent">
        <ListTile
          v-for="post in posts"
          :title="post.fields.title"
          :description="post.fields.description"
          :path="'/contentful/' + post.fields.slug"
        ></ListTile>
      </div>
    </ArticleTemplate>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import ArticleTemplate from "../components/Templates/ArticleTemplate";
  import {fetchEntries} from "@/api/contentful";
  import ListTile from "../components/molecules/ListTile";
  export default {
    components: {ListTile, ArticleTemplate},
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
</style>
