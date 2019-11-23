<template>
  <ArticleTemplate
    :title="title"
    :contents="body"
    :authorName="authorName"
    :updatedAt="updatedAt"
  >
    <div slot="mainContent">
      <div class="a-main__content">
        <div class="a-content-header">
          <div class="a-info">
            <div class="a-info__author">{{authorName}}</div>
            <div class="a-info__time">2019年04月22日に更新</div>
          </div>
          <h1 class="a-content-header__title">{{title}}</h1>
        </div>
        <div
          class="a-main__content-body"
          v-html="body"
        >
        </div>
      </div>
    </div>
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
