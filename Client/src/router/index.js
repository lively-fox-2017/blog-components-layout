import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Articles from '@/components/Articles'
import ShowArticle from '@/components/ShowArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: HelloWorld
    },
    {
      path: '/articles',
      component: Articles,
      children: [
        {
          path: ':id',
          component: ShowArticle,
          props: true
        }
      ]
    }
  ]
})
