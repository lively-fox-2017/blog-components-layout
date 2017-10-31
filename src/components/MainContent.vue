<template lang="html">
  <div class="col-md-9">
    <article-summary
    v-for="(article, index) in articles"
    :article="article"
    :key="index">
    </article-summary>
  </div>
</template>

<script>
import ArticleSummary from '@/components/ArticleSummary'
export default {
  props: ['articles'],
  components: {
    ArticleSummary
  }
}
</script>

<style>
</style>
