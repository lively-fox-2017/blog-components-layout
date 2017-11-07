<template>
  <div>
    <recentArticle :userStatus="userStatus"></recentArticle>
    <router-view></router-view>
    <!-- <showArticle></showArticle> -->
  </div>
</template>

<script>
import RecentArticle from '@/components/RecentArticle'
import ShowArticle from '@/components/ShowArticle'
export default {
  components: {
    RecentArticle,
    ShowArticle
  },
  computed: {
    userStatus () {
      return this.$store.state.user.isLogin
    }
  },
  methods: {
    getArticles () {
      this.$store.dispatch('getAllArticles')
    }
  },
  created () {
    this.getArticles()
  }
}
</script>
