<template>
  <div class="list-tile">
    <article class="list-tile__inside">
      <nuxt-link
        :to="path"
        class="list-tile__title">{{title}}</nuxt-link>
      <p class="list-tile__subtitle">{{description}}</p>
    </article>
  </div>
</template>
<script lang="ts">
  import {Component, Prop, Vue} from "nuxt-property-decorator";

  @Component
  export default class ListTile extends Vue {
    @Prop({ default: '' })
    title!: string;

    @Prop({ default: '' })
    description!: string;

    @Prop({ default: '' })
    path!: string;
  }
</script>
<style lang="sass" scoped>
  .list-tile
    border: 1px solid #ddd
    padding: 16px

  .list-tile__title
    display: inline-block
    font-size: 1.6rem
    font-weight: 700
    margin-bottom: 4px
    line-height: 1.4
    word-wrap: break-word
    word-break: break-all
    color: #47494e

  .list-tile__subtitle
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
</style>
