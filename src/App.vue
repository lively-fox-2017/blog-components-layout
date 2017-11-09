<template>
<div id="app">
  <div class="demo-layout-transparent mdl-layout mdl-js-layout">
    <header class="mdl-layout__header mdl-layout__header--transparent">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">Blog TdD</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
          <router-link :to="{ name: 'Main', params: {} }" class="mdl-navigation__link">Main</router-link>
          <router-link :to="{ name: 'Blog', params: {} }" class="mdl-navigation__link">Blog</router-link>
          <p class="mdl-navigation__link show-modal" id="login" v-if="!loggedIn">Login</p>
          <span v-else>
            <p class="mdl-navigation__link" id="logout" v-on:click="doLogOut">Logout</p>
            <router-link :to="{ name: 'Dashboard', params: {} }" class="mdl-navigation__link">Dashboard</router-link>
          </span>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <router-link :to="{ name: 'Main', params: {} }" class="mdl-navigation__link">Main</router-link>
        <router-link :to="{ name: 'Blog', params: {} }" class="mdl-navigation__link">Blog</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <router-view :articles="articles" :loggedInStatus="loggedIn"></router-view>
    </main>
  </div>
  <dialog class="mdl-dialog" id="login">
    {{messageRegister}}
    <div style="text-align:right">
      <button type="button" class="close" ref="closeButton">x</button>
    </div>
    <LoginForm v-if="loginDialog" v-on:toggleDialog="toggleDialog" v-on:closeDialog="closeDialog" v-on:loggedIn="toggleLogInStatus" v-bind:loggedInStatus="loggedIn"></LoginForm>
    <RegisterForm v-else v-on:toggleDialog="toggleDialog" v-on:sendMessage="registerMessage"></RegisterForm>
  </dialog>
</div>
</template>

<style>
.demo-layout-transparent {
  background: url('./assets/transparent.jpg') center / cover;
}

.demo-layout-transparent .mdl-layout__header,
.demo-layout-transparent .mdl-layout__drawer-button {
  /* This background is dark, so we set text to white. Use 87% black instead if
 your background is light. */
  color: white;
}
</style>
<script>
import RegisterForm from '@/components/RegisterForm'
import LoginForm from '@/components/LoginForm'
export default {
  name: 'app',
  data: () => {
    return {
      articles: [],
      loginDialog: true,
      loggedIn: false,
      username: '',
      password: '',
      email: '',
      name: '',
      messageRegister: ''
    }
  },
  components: {
    RegisterForm,
    LoginForm
  },
  methods: {
    getAllArticle () {
      this.$http.get('/article').then((data) => {
        this.articles = data.data.reverse()
      })
    },
    registerMessage (value) {
      this.messageRegister = value
    },
    toggleDialog () {
      this.loginDialog = !this.loginDialog
    },
    closeDialog () {
      const elem = this.$refs.closeButton
      elem.click()
    },
    doLogOut () {
      this.loggedIn = false
      localStorage.removeItem('token')
    },
    toggleLogInStatus () {
      this.loggedIn = !this.loggedIn
    },
    checkAuth () {
      if (!localStorage.getItem('token')) {
        this.loggedIn = false
      } else {
        this.loggedIn = true
      }
    }
  },
  created: function () {
    this.getAllArticle()
    this.checkAuth()
  },
  watch: {
    loggedIn (watched) {
      this.checkAuth()
    }
  }
}
</script>
