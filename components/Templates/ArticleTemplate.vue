<template>
  <div class="article-template">
    <GlobalHeader/>
    <div class="container">
      <div class="a-container">
        <div class="a-main">
          <div class="a-main__content">
            <slot name="mainContent"></slot>
          </div>
        </div>
        <div class="a-sub">
          <div class="a-sub__content--1">
            <slot name="subContent1"></slot>
          </div>
          <div class="a-sub__content--2">
            <slot name="subContent2"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "nuxt-property-decorator";
    @Component({
      components: {
        GlobalHeader: () => import('~/components/organism/GlobalHeader.vue')
      }
    })
    export default class ArticleTemplate extends Vue{}
</script>

<style lang="sass" scoped>
  $breakpoints: (sm: 'screen and (max-width: 400px)', md: 'screen and (max-width: 768px)', lg: 'screen and (max-width: 1000px)', xl: 'screen and (min-width: 1001px)',) !default
  @mixin mq($breakpoint: md)
    @media #{map-get($breakpoints, $breakpoint)}
    @content

  .article-template
    background-color: #f6f6f6
    width: 100%
    overflow: hidden

  .container
    padding-top: 24px
    padding-bottom: 40px
    @media screen and (max-width: 768px)
      padding-top: 0
  .a-container
    min-height: 100vh
    display: grid
    grid-template-columns: 80px calc(100% - 80px - 300px) 300px
    @media screen and (max-width: 1000px)
      grid-template-columns: 100%
      width: auto
      display: initial
  .a-main
    grid-column: 2 / 3
    padding: 16px
    @media screen and (max-width: 1000px)
      grid-column: 1 / 3
    @media screen and (max-width: 768px)
      padding: 0
  .a-main__content
    background-color: #ffffff
    padding: 32px
    @media screen and (max-width: 768px)
      padding: 16px 16px 32px

  .a-sub
    padding-top: 16px
    grid-column: 3 / 3
</style>
