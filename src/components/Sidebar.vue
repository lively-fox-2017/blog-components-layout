<template lang="html">
  <div class="col-md-3">
    <article-list-groups :articles="articles"></article-list-groups>
  </div>
</template>

<script>
import ArticleListGroups from '@/components/ArticleListGroups'
export default {
  props: ['articles'],
  components: {
    ArticleListGroups
  }
}
</script>

<style>
</style>
