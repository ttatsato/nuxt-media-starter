<template>
  <div
    class="atom-markdown-content"
    v-html="content"></div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "nuxt-property-decorator";

    @Component
    export default class MarkdownText extends Vue {
        @Prop({default: ''})
        content!: string
    }
</script>

<style lang="sass" scoped>
  .atom-markdown-content /deep/ h1,
  .atom-markdown-content /deep/ h2,
  .atom-markdown-content /deep/ h3,
  .atom-markdown-content /deep/ h4,
  .atom-markdown-content /deep/ h5,
  .atom-markdown-content /deep/ h6
    font-weight: 700
    line-height: 1.5
    font-feature-settings: "palt"
    margin-top: 2.2em
    margin-bottom: 2.4rem
    cursor: pointer
    position: relative

  .atom-markdown-content /deep/ h1
    font-size: 2em
    border-bottom: 1px solid #ddd
    padding-bottom: .1em

  .atom-markdown-content /deep/ h2
    font-size: 1.8em
    border-bottom: 1px solid #ddd
    padding-bottom: .1em

  .atom-markdown-content /deep/ h3
    font-size: 1.6em
    padding-bottom: .1em

  .atom-markdown-content /deep/ .code-frame
    margin: 1.5em -32px
    padding: 1em 32px
    font-size: .9em

  .atom-markdown-content /deep/ ul
    list-style: disc
    margin-left: 1rem

  .atom-markdown-content /deep/ p
    line-height: 1.9
  .atom-markdown-content /deep/ a
    word-break: break-all
  .atom-markdown-content /deep/ pre
    margin-bottom: 1rem


  .atom-markdown-content /deep/ table
    border-collapse: collapse
    width: 100%
  .atom-markdown-content /deep/ th,
  .atom-markdown-content /deep/ td
    padding: 0.5rem
    border: 1px solid #ddd
  .atom-markdown-content /deep/ th
    background: #b9b9b8
  .atom-markdown-content /deep/ tr:nth-child(2n+1)
    background: #eee
  .atom-markdown-content /deep/ tr:hover
    background: #ff0
</style>
