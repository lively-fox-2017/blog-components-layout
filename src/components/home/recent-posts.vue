<template lang="html">
  <div class="row">
    <h3>Post Terbaru</h3>
    <hr>
    <div class="thumb col-md-3">
      <img class="img-thumbnail" src="https://i.redd.it/2b6ltg84rbiz.jpg" alt="">
      <h5>{{title}}</h5>
      <p>deskripsi singkat mengenai lorem ipsum, kalo overflow di hidden</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'recent-post',
  data(){
    return {
      img_url:'',
      title:'Warga ditabrak mustang'
    }
  }
}
</script>

<style lang="css">
  .thumb{
    font-family: 'Open Sans', sans-serif !important;
  }
</style>
