<template>
  <div>
    <div class="col-sm-12 col-md-7 col-md-offset-2" v-if="isLogin == false">
      <h2>Recent Article</h2>
      <div class="list-group">
        <router-link class="list-group-item col-md-12" v-for='(value, index) in allarticles' :to="'/articles/'+value._id" :key="index">
          <div class="recentImg col-md-2 col-sm-12">
            <img v-bind:src="value.imgUrl" v-bind:alt="value.imgName" width="100%">
          </div>
          <div class="recentDescrption">
            <h3 class="list-group-item-heading">{{ value.judul }}</h3>
            <p class="list-group-item-text">{{ value.deskripsi.substring(0, 100) }}.......</p>
          </div>
        </router-link>
      </div>
    </div>

    <div v-else class="col-sm-12 col-md-6">
      <h2>Recent Article</h2>
      <div class="list-group">
        <router-link class="list-group-item col-md-12" v-for='(value, index) in allarticles' :to="'/articles/'+value._id" :key="index">
          <div class="recentImg col-md-2 col-sm-12">
            <img v-bind:src="value.imgUrl" v-bind:alt="value.imgName" width="100%">
          </div>
          <div class="recentDescrption">
            <h3 class="list-group-item-heading">{{ value.judul }}</h3>
            <p class="list-group-item-text">{{ value.deskripsi.substring(0, 100) }}.......</p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="col-sm-12 col-md-6" v-if="isLogin == true">
      <h2>Articles Posted By You</h2>
      <div class="list-group">
        <router-link class="list-group-item col-md-12" v-for='(value, index) in articlesByMe' :to="'/articles/'+value._id" :key="index">
          <div class="recentImg col-md-2 col-sm-12">
            <img v-bind:src="value.imgUrl" v-bind:alt="value.imgName" width="100%">
          </div>
          <div class="recentDescrption">
            <h3 class="list-group-item-heading">{{ value.judul }}</h3>
            <p class="list-group-item-text">{{ value.deskripsi.substring(0, 100) }}.......</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ['allarticles', 'isLogin'],
  data () {
    return {
      articlesByMe: []
    }
  },
  methods: {
    getArticlesByMe (userid) {
      this.$axios.get(`/articles/${userid}`).then((response) => {
        // console.log(response)
        this.articlesByMe = response.data.data
        // console.log(response.data.data)
        // console.log(this.articlesByMe)
      }).catch((reason) => {
        console.log('ERROR,', reason)
      })
    }
  },
  // watch: {
  //   isLogin (newIsLogin) {
  //     console.log('MASUUUUUUUUUUUKKKKKKKKKKKKKKK')
  //     let decodedToken = this.$jwt.decode()
  //     this.getArticlesByMe(decodedToken._id)
  //   }
  // }
  created () {
    console.log('MASUKKKKKKKKKKKKKKK')
    let decodedToken = this.$jwt.decode()
    this.getArticlesByMe(decodedToken._id)
    // console.log('-------------->', this.articlesByMe)
  }
}
</script>

<style>
  h2{
    color: orange;
    font-weight: bold;
  }

  .list-group{
    height: 200px;
    overflow-y: scroll;
  }

  .recentImg{
    float: left;
  }

  .recentDescription{
    float: left;
  }
</style>
