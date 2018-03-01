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
            <router-link to="/about"><p class="nav-link" href="#">Article</p></router-link>
          </li>  
          <div v-if="isLogin === 'true'">
            <li class="nav-item" data-toggle="modal" data-target="#exampleModal">
              <p class="nav-link" >Create</p>
            </li>  
          </div>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <div v-if="isLogin === 'true'">
            <button class="btn btn-outline-danger my-2 my-sm-0" type="button" @click="logOut">LogOut</button>
          </div>
        </form>
      </div>
    </nav>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter title" v-model="article.title">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Category</label>
                <input type="text" class="form-control" placeholder="Category" v-model="article.category">
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="article.content"></textarea>
              </div>
              <button type="button" class="btn btn-primary" @click="createArticle">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      article: {
        title: '',
        content: '',
        category: '',
        author: ''
      },
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
      window.location.href = window.location.href
    },
    createArticle () {
      let data = {
        title: this.article.title,
        content: this.article.content,
        category: this.article.category,
        author: localStorage.getItem('UserId')
      }

      this.$http.post('/articles', data)
        .then(response=>{
          console.log(response)
          swal('Article Created', 'article success to create', 'success')
        })
        .catch(error=>{
          console.log(error)
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
