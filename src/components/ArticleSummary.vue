<template lang="html">

  <div class="media">
    <div class="media-left media-middle">
      <img class="media-object" :src="article.featured_image">
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{ article.title }}</h4>
      {{ article.excerpt }}
      <p class="full-article-btn">
        <router-link class="btn btn-primary" :to="{ name: 'ArticleDetail', params: { slug: article.slug } }">
          See full article
        </router-link>
      </p>
    </div>
  </div>

</template>

<script>
export default {
  props: ['article']
}
</script>

<style>
  .media-object {
    max-height: 200px;
  }
  .media {
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;
  }
  .full-article-btn {
    margin-top: 15px;
  }
</style>
