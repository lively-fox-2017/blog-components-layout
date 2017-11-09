import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import BlogList from '@/components/BlogList'
import SinglePost from '@/components/SinglePost'
import MultiPost from '@/components/MultiPost'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: BlogHome
    },
    {
      path: '/blog',
      component: BlogList,
      children: [
        {
          path: '',
          name: 'Blog',
          component: MultiPost
        },
        {
          path: ':id',
          name: 'BlogDetail',
          component: SinglePost,
          props: true
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
