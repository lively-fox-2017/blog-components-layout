<template lang="html">
<div>
  <div class="mdl-grid" v-for="article in articles">
    <div class="mdl-layout-spacer"></div>
    <div class="mdl-cell mdl-cell--8-col">
      <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <img :src="article.imageUrl"/>
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{{article.title}}</h2>
        </div>
        <div class="mdl-card__supporting-text">
          {{article.content.substring(0, 100)}}
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click="redirectTo(article._id)">
            Read More
          </a>
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
</div>
</template>

<script>
export default {
  props: ['articles'],
  data: () => {
    return {

    }
  },
  methods: {
    redirectTo (id) {
      this.$router.push('/blog/' + id)
    }
  }
}
</script>

<style lang="css">
</style>
