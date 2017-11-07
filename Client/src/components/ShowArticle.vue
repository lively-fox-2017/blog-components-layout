<template>
  <div>
    <div class="showArticle col-sm-12 col-md-7 col-md-offset-2">
      <!-- <h4>{{ formatDate }}</h4> -->
      <h2>{{ article.judul }}</h2>
      <img v-bind:src="article.imgUrl" width='90%' v-bind:alt="article.imgName">
      <p>
        {{ article.deskripsi }}
      </p>
    </div>
  </div>
</template>

<script>
export default{
  props: ['id'],
  data () {
    return {
      article: ''
    }
  },
  computed: {
    Articles () {
      return this.$store.state.articles
    }
  },
  methods: {
    getArticle () {
      this.Articles.forEach((dataArticle) => {
        if (dataArticle._id === this.id) {
          this.article = dataArticle
        }
      })
    }
  },
  watch: {
    id (newId) {
      this.getArticle()
    },
    Articles () {
      // console.log('akhirnya terisi ', this.Articles)
      this.getArticle()
    }
  },
  mounted () {
    this.getArticle()
  }
}
</script>

<style>
  .showArticle{
    background-color: #eaeaea;
  }
</style>
