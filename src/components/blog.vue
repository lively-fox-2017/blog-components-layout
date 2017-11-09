<template lang="html">
  <div class="container">
    <div class="row">
      this is blog
    </div>
    <router-view/>

  </div>
</template>

<script>
import vueRouter from 'vue-router'

import detail from './blog/detail.vue'
import post from './blog/post.vue'

const routes = [
  {path: '/detail/:id', component:detail},
  {path: '/create-post', component:post}
]

const router = new vueRouter({
  routes
})

export default {
  router,
  name:'blog',
  data(){
    return{

    }
  }
}
</script>

<style lang="css">
</style>
