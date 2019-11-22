<template>
  <ArticleTemplate
    :title="title"
    :contents="body"
    :authorName="authorName"
    :updatedAt="updatedAt"
  >

  </ArticleTemplate>
</template>

<script lang="ts">
  import {Component, Vue} from "nuxt-property-decorator";
  import { Context } from '@nuxt/types'
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()
  @Component({
    components: {
      ArticleTemplate: () => import('~/components/Templates/ArticleTemplate.vue')
    }
  })
  export default class Article extends Vue {

    async asyncData({params}): object {
      const data = await client.getEntry({
        id: params.id
      })

      return {
        title: data.fields.title,
        body: data.fields.body,
        updatedAt: data.sys.updatedAt,
        authorName: data.fields.author.fields.name
      }
    }
  }
</script>

<style scoped>

</style>
