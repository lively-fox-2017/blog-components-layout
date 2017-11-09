import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import MainContent from '@/components/MainContent'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles',
      component: Articles,
      children: [
        {
          path: '',
          name: 'Articles',
          component: MainContent
        },
        {
          path: ':slug',
          name: 'ArticleDetail',
          component: ArticleDetail,
          props: true
        }
      ]
    }
  ]
})
