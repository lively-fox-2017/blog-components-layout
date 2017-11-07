<template>
  <div>
    <div class="col-sm-12 col-md-7 col-md-offset-2" v-if="userStatus == false">
      <h2>Recent Article</h2>
      <div class="list-group">
        <router-link class="list-group-item col-md-12" v-for='(value, index) in Articles' :to="'/articles/'+value._id" :key="index">
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

    <div class="col-sm-12 col-md-6" v-else>
      <h2>Recent Article</h2>
      <div class="list-group">
        <router-link class="list-group-item col-md-12" v-for='(value, index) in Articles' :to="'/articles/'+value._id" :key="index">
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

    <div class="col-sm-12 col-md-6" v-if="userStatus == true">
      <h2>Articles Posted By You</h2>
      <div class="list-group">
        <router-link class="list-group-item col-md-12" v-for='(value, index) in MyArticles' :to="'/articles/'+value._id" :key="index">
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
  props: ['userStatus'],
  computed: {
    Articles () {
      return this.$store.state.articles
    },
    MyArticles () {
      return this.$store.state.myArticles
    }
  },
  methods: {
    getMyArticles () {
      let decodedToken = this.$jwt.decode()

      this.$store.dispatch('getMyArticles', decodedToken._id)
    }
  },
  watch: {
    userStatus (newUser) {
      this.getMyArticles()
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.getMyArticles()
    }
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
