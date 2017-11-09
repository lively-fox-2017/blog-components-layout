<template>
  <div id='UserArticleComponent'>
    <sui-grid-row style="padding: 5px 0px">
      <sui-grid-column :width="4">
        <router-link :to="{ name: 'add', params: {} }">
          <sui-button basic>
            <sui-icon name="plus" />
            Add Article
          </sui-button>
        </router-link>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row v-for="article in articles" :key="article._id">
      <sui-grid-column :width="16">
        <sui-card-group :itemsPerRow="1">
          <sui-card>
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
                  Edit
                </sui-button>
              </router-link>
            </sui-card-content>
          </sui-card>
        </sui-card-group>
      </sui-grid-column>
    </sui-grid-row>
  </div>
</template>
<script>
import striptags from 'striptags'
import moment from 'moment'

export default {
  name: 'UserArticleComponent',

  props: ['articles'],

  data: () => ({}),

  methods: {
    formatSummary (value) {
      let striped = striptags(value)
      if (striped.length > 500) {
        let stripedCut = striped.substring(0, 500)
        striped = stripedCut.substring(0, striped.indexOf(' ')) + '...'
      }
      return striped
    },
    formatDate: function (value) {
      if (value) {
        return moment(value).format('d MMM YYYY')
      }
    }
  }
}
</script>
<style scoped>
</style>
