<template>
  <ArticleTemplate>
    <div slot="mainContent">
      <div class="a-main__content">
        <div class="a-content-header">
          <div class="a-info">
            <div class="a-info__author">{{authorName}}</div>
            <div class="a-info__time"><time>{{updatedAt}}</time> 更新</div>
          </div>
          <h1 class="a-content-header__title">{{title}}</h1>
        </div>
        <div class="a-main__content-body">
          <MarkdownText :content="body"/>
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
      MarkdownText: () => import('~/components/Atoms/MarkdownText.vue'),
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
  .a-content-header
    margin-bottom: 40px
  .a-content-header__title
    margin-top: 0
    font-size: 2.5rem
    font-weight: 700
    margin-bottom: 16px
    font-feature-settings: "palt"
    line-height: 1
    border: none

  .a-info
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: flex-start
    width: 100%

  .a-info__author
    margin-right: 16px
    font-size: 1.6rem
</style>
