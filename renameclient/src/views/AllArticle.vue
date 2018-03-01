<template>
  <div>
    <h1>All Article</h1>
    <div v-for="article in articles" :key="article._id">
      {{articles}}
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{article.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{article.category}}</h6>
          <p class="card-text">{{article.content}}</p>
          <router-link :to="'/about/' + article._id"><p>Detail</p></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllArticle',
  data () {
    return {
      articles: []
    }
  },
  created () {
    console.log(this.$store.state.articles)
    this.$http.get('/articles')
        .then(response=>{
          console.log(response.data.data)
          this.articles = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style>

</style>
