import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Pages/Home'
import List from '@/components/Pages/List'
import Cart from '@/components/Pages/Cart'
import Listdetail from '@/components/Pages/Listdetail'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/listdetail',
      name: 'listdetail',
      component: Listdetail
    }
  ]
})
