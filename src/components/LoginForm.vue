<template lang="html">
  <div>
    <h4 class="mdl-dialog__title">Login</h4>
    <form action="#" v-on:submit.prevent="doLogin">
    <div class="mdl-dialog__content">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="usernameLogin" v-model="username" required>
          <label class="mdl-textfield__label" for="usernameLogin">Username</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="password" id="passwordLogin" v-model="password" required>
          <label class="mdl-textfield__label" for="passwordLogin">Password</label>
        </div>
    </div>
    <div class="mdl-dialog__actions">
      <button type="submit" class="mdl-button">Login</button>
      <button type="button" class="mdl-button" v-on:click="toggleDialog">Register</button>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    toggleDialog () {
      this.$emit('toggleDialog')
    },
    doLogin () {
      this.$http.post('/auth/login', {username: this.username, password: this.password}).then(({data}) => {
        localStorage.setItem('token', data.token)
        this.$router.push('/dashboard')
        this.$emit('closeDialog')
        this.$emit('loggedIn')
      }).catch((err) => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
