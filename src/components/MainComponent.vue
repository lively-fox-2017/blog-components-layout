<template lang="html">
  <sui-container>
    <sui-menu :widths="3" :inverted="true">
      <sui-menu-item>
        BLOG
      </sui-menu-item>
      <sui-menu-item><router-link :to="{ name: 'home', params: {} }">Home</router-link></sui-menu-item>
      <sui-menu-item><router-link :to="{ name: 'blog', params: {} }">Blog</router-link></sui-menu-item>
      <sui-menu-item position="right"><router-link :to="{ name: 'blog', params: {} }"><sui-icon name="sign in" />Login</router-link></sui-menu-item>
    </sui-menu>
    <router-view></router-view>
  </sui-container>
</template>

<script>
export default {
  name: 'MainComponent'
}
</script>

<style lang="css">
</style>
