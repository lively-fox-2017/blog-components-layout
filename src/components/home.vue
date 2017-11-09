<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3 form-search search-only">
        <i class="search-icon glyphicon glyphicon-search"></i>
        <input type="text" placeholder="search" class="form-control search-query">
      </div>
    </div>
    <h1 class="row logo">Low</h1>
    <recent/>
    <router-view/>
  </div>
</template>

<script>
import vueRouter from 'vue-router';

import register from './home/register.vue'
import login from './home/login.vue'
import recentPost from './home/recent-posts.vue'

const routes = [
  { path: '/login', component: login },
  { path: '/register', component: register }
]

const router = new vueRouter({
  routes // short for `routes: routes`
})

export default {
  name:'home',
  components:{
    recent:recentPost
  },
  router
}
</script>

<style lang="css">
  .search-icon {
    margin-left: 10px;
  }

  .logo{
    font-family: 'Rozha One', serif;
  }
</style>
