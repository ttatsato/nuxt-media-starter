<template>
  <b-navbar :fixed-top="true">
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item :href="'/'">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        hoge
      </b-navbar-item>
      <b-navbar-dropdown label="Portfolio">
        <b-navbar-item
          v-for="portfolioRoute in portfolioRoutes"
          :key="portfolioRoute.path"
          @click="$router.push(portfolioRoute.path)"
        >{{portfolioRoute.name}}</b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>fuga</strong>
          </a>
          <a class="button is-light">foo</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script lang="ts">
  import {Component, Vue} from "nuxt-property-decorator";

  @Component
  export default class GlobalHeader extends Vue {

    portfolioRoutes: Array<object> = []

    mounted () {
      // @ts-ignore
      this.$router.options.routes.forEach(route => {
        if (route.path.indexOf('/portfolio') >= 0 ) {
          this.portfolioRoutes.push(route)
        }
      })
    }
  }
</script>
<style lang="sass" scoped>
  .navbar
    border-bottom: 1px solid orange
</style>

