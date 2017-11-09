<template>
  <div id="app">
    <Navbar/>
    <Navcon/>
    <!-- <img src="./assets/logo.png"> //menampilkan logo dari folder assets
    <router-view></router-view> // menampilkan dari router-->

  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Navcon from '@/components/Navcon'
export default {
  name: 'app',
  components: {
    Navbar,
    Navcon
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
