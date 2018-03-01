<template>
  <div>
    <h1>ini Detail Article</h1>
    <div v-if="isLogin === 'true'">
      <button class="btn btn-outline-danger my-2 my-sm-0" type="button" data-toggle="modal" data-target="#editModal">Edit</button>
      <button class="btn btn-outline-danger my-2 my-sm-0" type="button" @click="logOut">Delete</button>
    </div>

    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <input type="text" class="form-control" aria-describedby="emailHelp" :v-model="article.title">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Category</label>
                <input type="text" class="form-control" :v-model="article.category">
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" :v-model="article.content"></textarea>
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
    {{article}}
  </div>
</template>

<script>
export default {
  props: ['idArticle'],
  data () {
    return {
      isLogin: '',
      UserId: '',
      article: []
    }
  },
  created () {
    console.log(localStorage.getItem('isLogin'))  
    this.isLogin = localStorage.getItem('isLogin')
    this.UserId = localStorage.getItem('UserId')
    console.log(this.isLogin)

    console.log(this.idArticle)
    this.$http.get('/articles/' + this.idArticle)
      .then(response =>{
        console.log(response.data)
        this.article = response.data.data
      })
      .catch(error=>{
        console.log(error)
      })
  }, 
  methods: {
    editArticle () {
      console.log(this.article.author._id)
      if (this.article.author._id === this.UserId){
        this.$http.post('')
        swal('Article Edited', '', 'success')
      }else{
        swal("You're not authorized", "You are not the creator", "error")
      }
    },
    deleteArticle () {

    }
  }
}
</script>

<style>

</style>
