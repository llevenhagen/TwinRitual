import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Merch from '@/components/Merch'
import CreateMerch from '@/components/CreateMerch'
import ViewItem from '@/components/ViewItem'
import EditItem from '@/components/EditItem'
import Cart from '@/components/Cart'
Vue.use(Router)

export default new Router({
  // get rid of hash before routs with mode: history
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Main
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/merch',
      name: 'merch',
      component: Merch
    },
    {
      path: '/merch/create',
      name: 'create-merch',
      component: CreateMerch
    },
    {
      path: '/merch/:itemId',
      name: 'item',
      component: ViewItem
    },
    {
      path: '/merch/:itemId/edit',
      name: 'edit-item',
      component: EditItem
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
