<template lang="html">
  <sui-container>
    <sui-grid :stackable="true">
      <sui-grid-row>
        <sui-grid-column :width="4">
          <sui-segment :raised="true">
            <sui-header size="small">Recent News</sui-header>
            <SidebarComponent :articles="articles">
            </SidebarComponent>
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column :width="12">
          <router-view></router-view>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-container>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent'
export default {
  name: 'BlogComponent',
  components: {
    SidebarComponent
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      this.$http.get('/api/articles/get_articles')
        .then(({data}) => {
          this.articles = data
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<style lang="css">
</style>
