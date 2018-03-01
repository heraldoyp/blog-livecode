import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    allArticle (state, payload) {
      state.articles = payload
    }
  },
  actions: {
    getAllArticle ({commit}) {
      this.$http.get('/articles')
        .then(response=>{
          commit('allArticle', response.data.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
