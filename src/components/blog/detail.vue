<template lang="html">
  <div class="">
    detail
    <h1>{{title}}</h1>
    {{content}}
  </div>
</template>

<script>
export default {
  name:'detail',
  data(){
    return {
      title:'',
      content:''
    }
  },
  created(){
    console.log(this.$route.params.id);
    axios.get('http://localhost:3000/post/'+this.$route.params.id)
    .then(response=>{
      this.title = response.data.post.title;
      this.content = response.data.post.content;
    })
  }
}
</script>

<style lang="css">
</style>
