<template lang="html">
  <div class="">
    title:<input v-model="title" type="title" name="" value="">
    POSt:<textarea v-model="post" name="name" rows="8" cols="80"></textarea>
    <button v-on:click="createPost" type="button" name="button">post</button>
    {{message}}
  </div>
</template>

<script>
export default {
  name:'post',
  data(){
    return {
      title:'',
      post:'',
      message:''
    }
  },
  methods:{
    createPost(){
      axios.post('http://localhost:3000/post/', {
        title:this.title,
        content:this.post,
        token:window.localStorage.getItem('token')
      })
      .then(response=>{
        this.message = response.data.message
      })
    }
  }
}
</script>

<style lang="css">
</style>
