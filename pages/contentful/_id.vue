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
  import {fetchEntryBySlug} from "@/api/contentful";
  @Component({
    components: {
      ArticleTemplate: () => import('~/components/Templates/ArticleTemplate.vue')
    }
  })
  export default class Article extends Vue {
    async asyncData({params} : {params: any}) :Promise<Object> {
      return await fetchEntryBySlug(params.id)
    }
  }
</script>

<style lang="sass" scoped>
  .a-content-header__title
    margin-top: 0
</style>
