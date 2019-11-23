<template>
  <ArticleTemplate>
    <div slot="mainContent">
      <div class="a-main__content">
        <div class="a-content-header">
          <div class="a-info">
            <div class="a-info__author">{{authorName}}</div>
            <div class="a-info__time">{{updatedAt}} 更新</div>
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
  import {createClient} from '~/plugins/contentful.js'
  import marked from "marked"
  const client = createClient()
  @Component({
    components: {
      ArticleTemplate: () => import('~/components/Templates/ArticleTemplate.vue')
    }
  })
  export default class Article extends Vue {

    async asyncData({params, env} : {params: any, env: any}) :Promise<Object> {
      const data = await client.getEntry({
        id: params.id
      })
      return {
        title: data.fields.title,
        body: marked(data.fields.body),
        updatedAt: data.sys.updatedAt,
        authorName: data.fields.author.fields.name
      }
    }
  }
</script>

<style scoped>

</style>
