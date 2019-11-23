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
            a-sub__content--1
            <slot name="subContent1"></slot>
          </div>
          <div class="a-sub__content--2">
            a-sub__content--2
            <slot name="subContent2"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
    @Component({
      components: {
        GlobalHeader: () => import('~/components/organism/GlobalHeader.vue')
      }
    })
    export default class ArticleTemplate extends Vue{
      @Prop({ default: '' })
      title!: string;
      @Prop({ default: '' })
      contents!: string;
      @Prop({ default: '' })
      authorName!: string;
    }
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
  .a-main__content
    background-color: #ffffff
    padding: 32px
    @media screen and (max-width: 768px)
      padding: 0

  .a-sub
    padding-top: 16px
    grid-column: 3 / 3

  .a-content-header
    margin-bottom: 40px
  .a-content-header__title
    font-size: 3rem
    font-weight: 700
    margin-bottom: 16px
    font-feature-settings: "palt"
    line-height: 1.4

  .a-info
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: flex-start
    width: 100%

  .a-info__author
    margin-right: 16px
    font-size: 1.6rem


  .a-main__content-body /deep/ h1,
  .a-main__content-body /deep/ h2,
  .a-main__content-body /deep/ h3,
  .a-main__content-body /deep/ h4,
  .a-main__content-body /deep/ h5,
  .a-main__content-body /deep/ h6
    font-weight: 700
    line-height: 1.5
    font-feature-settings: "palt"
    margin-top: 2.2em
    margin-bottom: 2.4rem
    cursor: pointer
    position: relative

  .a-main__content-body /deep/ h1
    font-size: 2em
    border-bottom: 1px solid #ddd
    padding-bottom: .1em

  .a-main__content-body /deep/ h2
    font-size: 1.8em
    border-bottom: 1px solid #ddd
    padding-bottom: .1em

  .a-main__content-body /deep/ h3
    font-size: 1.6em
    padding-bottom: .1em

  .a-main__content-body /deep/ .code-frame
      margin: 1.5em -32px
      padding: 1em 32px
      font-size: .9em

  .a-main__content-body /deep/ ul
    list-style: disc
    margin-left: 1rem

  .a-main__content-body /deep/ p
    line-height: 1.9


  .a-sub__content--1
    min-height: 250px
    border: 1px solid #ddd
    margin-bottom: 1rem
  .a-sub__content--2
    border: 1px solid #ddd
    min-height: 250px

</style>
