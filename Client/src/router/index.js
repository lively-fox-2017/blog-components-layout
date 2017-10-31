import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import articles from '@/components/articles'
import showArticle from '@/components/show-article'

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
      component: articles,
      children: [
        {
          path: ':index',
          component: showArticle,
          props: true
        }
      ]
    }
  ]
})
