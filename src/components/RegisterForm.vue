<template lang="html">
  <div>
    <h4 class="mdl-dialog__title">Register</h4>
    <form action="/" v-on:submit.prevent="doRegister">
    <div class="mdl-dialog__content">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="name1" v-model="name" required>
          <label class="mdl-textfield__label" for="name1">Name</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="username1" v-model="username" required>
          <label class="mdl-textfield__label" for="username1">Username</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="password" id="passwordhuuu" v-model="password" required>
          <label class="mdl-textfield__label" for="passwordhuuu">Password</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="email" id="emailhuba" v-model="email" required>
          <label class="mdl-textfield__label" for="emailhuba">Email</label>
        </div>
    </div>
    <div class="mdl-dialog__actions">
      <button type="submit" class="mdl-button">Register</button>
      <button type="button" class="mdl-button" v-on:click="toggleDialog">Login</button>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      username: '',
      password: '',
      email: '',
      name: ''
    }
  },
  methods: {
    toggleDialog () {
      this.$emit('toggleDialog')
    },
    doRegister () {
      this.$http.post('/auth/register', {
        username: this.username,
        password: this.password,
        email: this.email,
        name: this.name
      }).then((data) => {
        this.toggleDialog()
        this.$emit('sendMessage', 'Successfully Register \n Please login now')
      }).catch((err) => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
