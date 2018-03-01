<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/home"><p class="nav-link" href="#">Home <span class="sr-only">(current)</span></p></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about"><p class="nav-link" href="#">Link</p></router-link>
          </li>  
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <div v-if="isLogin === 'true'">
            <button class="btn btn-outline-danger my-2 my-sm-0" type="button" @click="logOut">LogOut</button>
          </div>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isLogin: ''
    }
  },
  created () {
    console.log(localStorage.getItem('isLogin'))
    this.isLogin = localStorage.getItem('isLogin')
    console.log(this.isLogin)
  },
  methods: {
    logOut () {
      swal('Logout Success', '', 'success')
      this.isLogin = localStorage.getItem('isLogin')
      localStorage.setItem('isLogin', 'false')
      localStorage.removeItem('token')
      localStorage.removeItem('UserId')
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
