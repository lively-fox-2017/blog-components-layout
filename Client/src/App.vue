<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Go Blog</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><router-link to="/">Home</router-link></li>
            <li><router-link to="/articles">Articles</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li v-if="isLogin == false" class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Login</a>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <form class="formlogin" v-on:submit.prevent="login()" method="post">
                    <h5>{{ errorMessage }}</h5>
                    <input class="form-control" id="inputDefault" type="text" v-model="credentials.username" name="username" placeholder="Username">
                    <input class="form-control" id="inputDefault" type="password" v-model="credentials.password" name="password" placeholder="password">
                    <button type="submit" class="btn btn-primary">Login</button>
                  </form>
                </li>
              </ul>
            </li>
            <li v-else>
              <a v-on:click="logout()">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view :isLogin="isLogin"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      errorMessage: '',
      isLogin: false
    }
  },
  methods: {
    login () {
      let credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }

      this.$axios.post('/users/login', credentials)
      .then((loginResponse) => {
        // console.log(loginResponse)
        this.$swal(
          'Login Success!',
          'Welcome Honey',
          'success'
        )

        localStorage.setItem('token', loginResponse.data.token)
        this.isLogin = true
      }).catch((reason) => {
        this.errorMessage = 'Invalid Username and Password'
      })
    },

    logout () {
      this.$swal({
        title: 'Are you sure?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#eaeaea',
        confirmButtonText: 'Logout'
      }).then(() => {
        this.$swal({
          title: 'Bye bye Honey',
          text: 'Hope you come back soon',
          imageUrl: 'https://media.giphy.com/media/TzpnO1kZpEC0U/giphy.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })

        localStorage.removeItem('token')
        this.isLogin = false
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.formlogin{
  padding: 5px;
}

.form-control{
  margin-bottom: 5px;
}
</style>
