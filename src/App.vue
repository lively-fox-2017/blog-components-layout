<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import VueRouter from 'vue-router'

import home from './components/home.vue'
import blog from './components/blog.vue'

const routes = [
  { path: '/', component: home },
  { path: '/blog', component: blog}
]

const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  router
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');
@import url('https://fonts.googleapis.com/css?family=Rozha+One');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
