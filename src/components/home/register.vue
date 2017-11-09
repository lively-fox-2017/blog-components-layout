<template lang="html">
  <div class="row">
    LOGO
    REGISTER
    email: <input v-model="email" type="email" name="email" value="">
    username: <input v-model="username" type="text" name="username" value="">
    password: <input v-model="password" type="password" name="password" value="">
    <button v-on:click="register" type="button" name="button">submit</button>
    {{message}}
  </div>

</template>

<script>
export default {
  name:"register",
  data(){
    return {
      email:'',
      username:'',
      password:'',
      message:''
    }
  },
  methods:{
    register(){
      axios.post('http://localhost:3000/user/create', {
        username:this.username,
        password:this.password,
        email:this.email
      })
      .then(response=>{
        this.message=response.data.message
      })
    }
  }
}
</script>

<style lang="css">
</style>
