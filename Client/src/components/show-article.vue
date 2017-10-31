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
  props: ['allarticles', 'id'],
  data () {
    return {
      article: ''
    }
  },
  methods: {
    getArticle () {
      this.allarticles.forEach((dataArticle) => {
        if (dataArticle._id === this.id) {
          this.article = dataArticle
        }
      })
    }
  },
  watch: {
    id (newId) {
      this.getArticle()
    }
  },
  created () {
    this.getArticle()
  }
  // computed: {
  //   formatDate: function () {
  //     console.log(this.allarticles)
  //     console.log(this.index)
  //     console.log(this.allarticles[1])
  //     // let date = this.allarticles[this.index].createdAt
  //
  //     let arrDate = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  //
  //     let formatedDate = this.allarticles[this.index].createdAt.getDate() + ' ' + arrDate[this.allarticles[this.index].createdAt.getMonth()] + ' ' + this.allarticles[this.index].createdAt.getFullYear()
  //
  //     return formatedDate
  //   }
  // }
}
</script>

<style>
  .showArticle{
    background-color: #eaeaea;
  }
</style>
