<template lang="html">
  <div class="mdl-grid">
    <div class="mdl-layout-spacer"></div>
    <div class="mdl-cell mdl-cell--8-col">
      <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <img :src="article.imageUrl"/>
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{{article.title}}</h2>
        </div>
        <div class="mdl-card__supporting-text">
          {{article.content}}
        </div>
        <div class="mdl-card__menu">
          <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i class="material-icons">share</i>
          </button>
        </div>
      </div>
    </div>
    <div class="mdl-layout-spacer"></div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data: () => {
    return {
      article: {}
    }
  },
  methods: {
    getArticleData () {
      this.$http.get('/article/' + this.id).then((data) => {
        this.article = data.data
      }).catch(err => {
        console.error(err)
      })
    }
  },
  created: function () {
    this.getArticleData()
  },
  watch: {
    id (watched) {
      this.id = watched
      this.getArticleData()
    }
  }
}
</script>

<style lang="css">
</style>
