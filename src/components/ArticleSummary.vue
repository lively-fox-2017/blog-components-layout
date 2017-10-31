<template lang="html">
  <sui-card-group :itemsPerRow="3">
    <sui-card v-for="article in articles" :key="article.key">
      <sui-image :src="article.coverImage" />
      <sui-card-content>
        <sui-card-header>{{article.title}}</sui-card-header>
        <sui-card-meta>{{formatDate(article.createdAt)}}</sui-card-meta>
        <sui-card-description>{{formatSummary(article.content)}}</sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <router-link :to="{ name: 'detail', params: {slug: article.slug} }">
          <sui-button basic>
            <sui-icon name="angle right" />
            Read More
          </sui-button>
        </router-link>
      </sui-card-content>
    </sui-card>
  </sui-card-group>
</template>

<script>
import moment from 'moment'
import striptags from 'striptags'
export default {
  name: 'ArticleSummary',
  props: ['articles'],
  methods: {
    formatDate: function (value) {
      if (value) {
        return moment(value).format('d MMM YYYY')
      }
    },
    formatSummary (value) {
      let striped = striptags(value)
      if (striped.length > 500) {
        let stripedCut = striped.substring(0, 500)
        striped = stripedCut.substring(0, striped.indexOf(' ')) + '...'
      }
      return striped
    }
  },
  computed: {
    image () {
      return require('../assets/logo.png')
    }
  }
}
</script>

<style lang="css">
</style>
