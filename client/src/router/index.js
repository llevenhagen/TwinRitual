import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Merch from '@/components/Merch'
import CreateMerch from '@/components/CreateMerch'
import ViewItem from '@/components/ViewItem'
import EditItem from '@/components/EditItem'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
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
    }
  ]
})
