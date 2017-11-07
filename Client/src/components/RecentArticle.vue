<template>
  <div>
    <div v-if="userStatus == false">
      <div class="col-sm-12 col-md-7 col-md-offset-2" >
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
    </div>

    <MyArticle :Articles="Articles" :MyArticles="MyArticles" v-else/>

  </div>
</template>

<script>
import MyArticle from '@/components/MyArticle'

export default{
  props: ['userStatus'],
  components: {
    MyArticle
  },
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

  .setPadding{
    padding: 0px;
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

  .input-group-addon{
    background-color: orange;
    color: white;
    font-weight: bold;
  }

  .title{
    border: 1px solid orange;
  }

  .btn-orange{
    background-color: orange;
    color: white;
  }
</style>
