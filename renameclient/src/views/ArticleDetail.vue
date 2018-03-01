<template>
  <div>
    <h1>ini Detail Article</h1>
    <div v-if="isLogin === 'true'">
      <button class="btn btn-outline-danger my-2 my-sm-0" type="button" data-toggle="modal" data-target="#editModal">Edit</button>
      <button class="btn btn-outline-danger my-2 my-sm-0" type="button" @click="deleteArticle">Delete</button>
      <div class="card text-left" style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title">{{article.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{article.category}}</h6>
          <p class="card-text">{{article.content}}</p>
          <router-link :to="'/about/' + article._id"><p>Detail</p></router-link>
        </div>
      </div>
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
                <input type="text" class="form-control" aria-describedby="emailHelp" v-model="article.title">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Category</label>
                <input type="text" class="form-control" v-model="article.category">
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Content</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="article.content"></textarea>
              </div>
              <button type="button" class="btn btn-primary" @click="editArticle">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
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
    // console.log(localStorage.getItem('isLogin'))  
    this.isLogin = localStorage.getItem('isLogin')
    this.UserId = localStorage.getItem('UserId')
    console.log(this.isLogin)

    console.log(this.idArticle)
    this.$http.get('/articles/' + this.idArticle)
      .then(response =>{
        console.log(response.data.data)
        this.article = response.data.data
      })
      .catch(error=>{
        console.log(error)
      })
    // this.$store.dispatch('getAllArticle', this.idArticle)
    // this.article = this.$store.state.article
  }, 
  methods: {
    editArticle () {
      console.log(this.article.author._id)
      if (this.article.author._id === this.UserId){
        let data = {
          title: this.article.title,
          content: this.article.content,
          category: this.article.category,
          author: localStorage.getItem('UserId')
        }
        this.$http.put('/articles/' + this.idArticle, data)
          .then(response=>{
            console.log(response.data)
            swal('Article Edited', '', 'success')
          })
          .catch(error=>{
            console.log(error)
            swal('Article Fail to Create', '', 'error')
          })
        
      }else{
        swal("EAAAAAAAAAA MAU NGAPAIN HAYO", "You are not the creator", "error")
      }
    },
    deleteArticle () {
      if (this.article.author._id === this.UserId){
        this.$http.delete('/articles/' + this.idArticle)
          .then(response=>{
            console.log(response.data)
            swal('Article Edited', '', 'success')
          })
          .catch(error=>{
            console.log(error)
            swal('Article Fail to Create', '', 'error')
          })
      }else{
        swal("EAAAAAAAAA MAU NGAPAIN HAYO", "You are not the creator", "error")
      }
    }
  }
}
</script>

<style>

</style>
