<template lang="html">
  <div class="row">
    LOGO
    email: <input v-model="email" type="email" name="email" value="">
    password: <input v-model="password" type="password" name="password" value="">
    <button v-on:click="login" type="button" name="button">submit</button>
    {{message}}
  </div>

</template>

<script>
export default {
  name:"login",
  data(){
    return {
      email:'',
      username:'',
      password:'',
      message:''
    }
  },
  methods:{
    login(){
      axios.post('http://localhost:3000/user/login', {
        password:this.password,
        email:this.email
      })
      .then(response=>{
        this.message=response.data.message
        window.localStorage.setItem('token',response.data.token)
      })
    }
  }
}
</script>

<style lang="css">
</style>
