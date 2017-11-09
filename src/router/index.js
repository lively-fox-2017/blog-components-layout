import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/MainComponent'
import HomeComponent from '@/components/HomeComponent'
import BlogComponent from '@/components/BlogComponent'
import ArticleSummary from '@/components/ArticleSummary'
import ArticleDetail from '@/components/ArticleDetail'
import DashboardComponent from '@/components/DashboardComponent'
import UserArticleComponent from '@/components/UserArticleComponent'
import CreateArticleComponent from '@/components/CreateArticleComponent'
import UpdateArticleComponent from '@/components/UpdateArticleComponent'

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
      path: 'dashboard',
      component: DashboardComponent,
      name: 'dashboard',
      children: [{
        path: '',
        component: UserArticleComponent,
        name: 'dashboard'
      }, {
        path: '/new_post',
        component: CreateArticleComponent,
        name: 'add'
      }, {
        path: '/update_post/:slug',
        props: true,
        component: UpdateArticleComponent,
        name: 'edit'
      }]
    }, {
      path: 'blog',
      component: BlogComponent,
      children: [{
        path: '',
        name: 'blog',
        component: ArticleSummary
      }, {
        path: '/:slug',
        name: 'detail',
        props: true,
        component: ArticleDetail
      }]
    }]
  }]
})
