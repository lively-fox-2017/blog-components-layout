<template lang="html">
  <div class="list-group">
    <router-link v-for="(article, index) in articles" :to="{ name: 'ArticleDetail', params: { slug: article.slug } }" class="list-group-item" :key="index">{{ article.title }}</router-link>
  </div>
</template>

<script>
export default {
  props: ['articles']
}
</script>

<style>
</style>
