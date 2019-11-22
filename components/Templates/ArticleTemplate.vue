<template>
  <div class="article-template">
    <GlobalHeader/>
    <div class="container">
      <div class="a-container">
        <div class="a-main">
          <div class="a-main__content">
            <div class="a-content-header">
              <div class="a-info">
                <div class="a-info__author">俺だよ俺</div>
                <div class="a-info__time">2019年04月22日に更新</div>
                </div>
              <h1 class="a-content-header__title">{{title}}</h1>
            </div>
            <div
              class="a-main__content-body"
              v-html="contents"
            >
            </div>
          </div>
        </div>
        <div class="a-sub-content"></div>
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
    background-color: #ffffff
    grid-column: 2 / 3
    padding: 16px
    @media screen and (max-width: 1000px)
      grid-column: 1 / 3
  .a-main__content
    padding: 32px
    @media screen and (max-width: 768px)
      padding: 0

  .a-sub-content
    grid-column: 1 / 3

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
</style>
