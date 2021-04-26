import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader : true,
    posts : [],
    keycloack:'',
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    },
    login (state, payload){
      state.keycloack = payload
    }
  },
  actions: {
  }
})
