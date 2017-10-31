<template lang="html">
  <sui-list>
    <sui-list-item v-for="article in articles" :key="article.slug">
      <router-link :to="{ name: 'detail', params: {slug: article.slug} }">
        {{article.title}}
      </router-link>
    </sui-list-item>
  </sui-list>
</template>

<script>
export default {
  props: ['articles']
}
</script>

<style lang="css">
</style>
