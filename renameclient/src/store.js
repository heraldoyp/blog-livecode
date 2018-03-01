import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const http = axios.create({
//   baseURL: 'http://localhost:3000'
// })

export default new Vuex.Store({
  state: {
    articles: [],
    article: [],
  },
  mutations: {
    allArticle (state, payload) {
      state.articles = payload
    },
    oneArticle(state, payload){
      state.article = payload
    }
  },
  actions: {
    getAllArticle ({commit}) {
      http.get('/articles')
        .then(response=>{
          console.log('dari store', response)
          commit('allArticle', response.data.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getDetailArticle ({commit}, idArticle) {
      this.$http.get('/articles/' + idArticle)
      .then(response =>{
        console.log(response.data.data)
        this.article = response.data.data
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
})
