<template lang="html">
  <sui-container>
    <sui-menu :widths="3" :inverted="true">
      <sui-menu-item>
        BLOG
      </sui-menu-item>
      <sui-menu-item><router-link :to="{ name: 'home', params: {} }">Home</router-link></sui-menu-item>
      <sui-menu-item><router-link :to="{ name: 'blog', params: {} }">Blog</router-link></sui-menu-item>
      <sui-menu-item><router-link :to="{ name: 'dashboard', params: {} }">Dashboard</router-link></sui-menu-item>
      <sui-menu-item v-if="!isLogin" position="right">
        <fb-signin-button
        :params="fbSignInParams"
        @success="onSignInSuccess"
        @error="onSignInError">
          Sign in with Facebook
        </fb-signin-button>
      </sui-menu-item>
      <sui-menu-item v-if="isLogin" position="right">
        <sui-button negative @click.native="logout">Logout</sui-button>
      </sui-menu-item>
    </sui-menu>
    <router-view></router-view>
  </sui-container>
</template>

<script>
export default {
  name: 'MainComponent',
  data () {
    return {
      fbSignInParams: {
        scope: 'email,public_profile',
        return_scopes: true
      },
      isLogin: false
    }
  },
  methods: {
    onSignInSuccess ({authResponse}) {
      console.log('respon login ', authResponse)
      this.$http.post('http://localhost:3000/api/auth/get_authenticate', {}, {
        headers: {
          accesstoken: authResponse.accessToken,
          userid: authResponse.userID
        }
      })
        .then(({data}) => {
          console.log('asdasdasd ', data)
          localStorage.setItem('token', data.token)
          this.isLogin = true
        })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    },
    checkLoginStatus () {
      let token = localStorage.getItem('token')
      if (token) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    },
    logout () {
      localStorage.removeItem('token')
      this.isLogin = false
    }
  },

  created () {
    this.checkLoginStatus()
  }
}
</script>

<style lang="css">
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
  cursor: pointer;
}
</style>
