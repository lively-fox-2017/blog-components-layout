<template>
  <div>
    <recentArticle :allarticles="articles"></recentArticle>
    <router-view :allarticles="articles"></router-view>
    <!-- <showArticle></showArticle> -->
  </div>
</template>

<script>
import recentArticle from '@/components/recent-article'
import showArticle from '@/components/show-article'
export default {
  components: {
    recentArticle,
    showArticle
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getAllArticles () {
      this.$axios.get('/articles').then((result) => {
        this.articles = result.data.data
        // console.log(result)
      }).catch((reason) => {
        console.log(reason)
      })
    }
  },
  mounted () {
    this.getAllArticles()
    // console.log(this.articles)
  }
}
</script>
