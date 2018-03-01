<template>
  <div id="home">
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" v-model="user.username">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="user.password">
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary" @click="signIn">Submit</button>
          <button type="submit" class="btn btn-primary" @click="register">Register</button>
        </form>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      isLogin: '',
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      let data = {
        username: this.user.username,
        password: this.user.password
      }
      this.$http.post('/users/signin', data)
        .then(response=>{
          console.log(response.data.data)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('UserId', response.data.data._id)
          localStorage.setItem('isLogin', 'true')
          this.isLogin = 'true'
          swal('Login Success', '', 'success')
          this.$router.push('/about')
        })
        .catch(error=>{
          console.log(error)
          swal('Please Register', "youre not registered yet", 'error')
        })
    },
    register () {
      let data = {
        username: this.user.username,
        password: this.user.password
      }
      this.$http.post('/users/register', data)
        .then(response=>{
          console.log(response.data.data)
          swal('Register Success', '', 'success')
          this.$router.push('/')
          // window.location.href = window.location.href
        })
        .catch(error=>{
          console.log(error)
          swal('Register faile', '', 'error')
        })
    }
  }
}
</script>
