import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import AllArticle from './views/AllArticle.vue'
import ArticleDetail from './views/ArticleDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          path: '',
          component: AllArticle
        },
        // {
        //   path: ':idArticle',
        //   component: 'ArticleDetail',
        //   props: true
        // }
      ]
    }
  ]
})
