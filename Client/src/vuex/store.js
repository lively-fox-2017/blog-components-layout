import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let db = axios.create({
  baseURL: 'http://localhost:3000'
})

const store = new Vuex.Store({
  state: {
    user: {
      isLogin: false,
      userId: ''
    },
    articles: [],
    myArticles: []
  },
  mutations: {
    setLogin (state, userData) {
      state.user.isLogin = userData.isLogin
      state.user.userId = userData.userId
    },
    setArticles (state, articlesData) {
      state.articles = articlesData
    },
    setMyArticles (state, myArticlesData) {
      state.myArticles = myArticlesData
    }
  },
  actions: {
    getAllArticles ({commit}) {
      db.get('/articles').then((result) => {
        commit('setArticles', result.data.data)
      }).catch((reason) => {
        console.log(reason)
      })
    },
    getMyArticles ({commit}, userId) {
      db.get(`/articles/${userId}`).then((response) => {
        // console.log(response)
        commit('setMyArticles', response.data.data)
      }).catch((reason) => {
        console.log('ERROR,', reason)
      })
    }
  }
})

export default store
