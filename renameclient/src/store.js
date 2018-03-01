import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  loggedIn (state, payload) {

    }
  },
  actions: {
    storeRegister ({commit}) {
      this.$http.post('/users/signin')
        .then(response=>{
          commit('loggedIn' ,response.data.data)
        })
    }
  }
})
