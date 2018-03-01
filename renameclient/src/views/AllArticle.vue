<template>
  <div>
    <h1>Ini Article ALL</h1>
    {{articles}}
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
