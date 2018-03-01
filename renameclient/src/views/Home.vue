<template>
  <div id="home">
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
         Copy
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
          <button type="submit" class="btn btn-primary">Submit</button>
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
      user: {
        username: '',
        password: ''
      }
    }
  }
}
</script>
