<template>
  <sui-container textAlign="justified">
    <sui-grid :stackable="true">
      <router-view :articles="articles"></router-view>      
    </sui-grid>
  </sui-container>
</template>
<script>
import jwtdecode from 'jwt-decode'

export default {
  name: 'DashboardComponent',

  data: () => ({
    articles: []
  }),

  computed: {
    user () {
      return jwtdecode(localStorage.getItem('token'))
    }
  },

  methods: {
    getArticles () {
      console.log('user', this.user)
      this.$http.get(`/api/article/get_user_article/${this.user.userID}`)
        .then(({data}) => {
          console.log('sini ', data)
          this.articles = data
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },

  created () {
    this.getArticles()
  }
}
</script>
<style scoped>
</style>
