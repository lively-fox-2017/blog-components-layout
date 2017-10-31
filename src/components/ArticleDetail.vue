<template lang="html">
  <div class="col-md-9">
    <div class="row text-center">
      <img :src="article.featured_image">
    </div>
    <h2>{{ article.title }}</h2>
    <div class="row">
      <div class="col-md-12">
        <p>{{ article.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['slug'],
  data () {
    return {
      article: {}
    }
  },
  methods: {
    fetchArticleBySlug (slug) {
      this.$http.get('/articles/' + slug)
        .then(({data}) => {
          this.article = data
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  mounted () {
    this.fetchArticleBySlug(this.slug)
  },
  watch: {
    slug (newSlug) {
      this.fetchArticleBySlug(this.slug)
    }
  }
}
</script>

<style>
  img {
    max-width: 200px;
  }
</style>
