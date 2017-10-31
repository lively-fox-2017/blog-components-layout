import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/MainComponent'
import HomeComponent from '@/components/HomeComponent'
import BlogComponent from '@/components/BlogComponent'
import ArticleSummary from '@/components/ArticleSummary'
// import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: MainComponent,
    children: [{
      path: '',
      name: 'home',
      component: HomeComponent
    }, {
      path: 'blog',
      component: BlogComponent,
      children: [{
        path: '',
        name: 'blog',
        component: ArticleSummary
      }]
    }]
  }]
})
