<template lang="html">
  <sui-segment>
    <h2 is="sui-header">{{article.title}}</h2>
    <sui-image :src="article.coverImage" size="medium" />
    <p>{{article.content}}</p>
    <small>Author: {{article.author.name}}. Published At: {{formatDate(article.createdAt)}}</small>
  </sui-segment>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ArticleDetail',
  data () {
    return {
      article: {
        title: '',
        content: '',
        author: {},
        coverImage: ''
      }
    }
  },
  props: ['slug'],
  methods: {
    formatDate: function (value) {
      if (value) {
        return moment(value).format('d MMM YYYY')
      }
    },
    getDetailArticle () {
      this.$http.get('/api/article/get_article/' + this.slug)
        .then(({data}) => {
          this.article = data[0]
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  watch: {
    slug: function (val) {
      this.getDetailArticle()
    }
  },
  created () {
    this.getDetailArticle()
  }
}
</script>

<style lang="css">
</style>
