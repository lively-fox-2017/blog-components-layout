<template>
  <div class="Content col-md-9">
    <div id="pembatas" v-if="Navcon" class="jumbotron">
      <h1>{{Navcon.judul}}</h1>
      <p>{{Navcon.isi}}</a></p>
    </div>
    <div id="pembatas" v-else class="jumbotron">
      <h3> Klik Navbar Untuk Melihat Data </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: ['Navcon'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pembatas{
  border-radius: 30px;
  padding: 20px;
}
</style>
