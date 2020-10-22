import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import StockMenu from '@/components/stock/StockMenu.vue'
import MyStock from '@/components/stock/MyStock.vue'
import Login from '@/components/system/Login.vue'
import Register from '@/components/system/register.vue'
import Index from '@/components/Index'
import SideMenu from '@/components/stock/SideMenu.vue'
import StockList from '@/components/stock/StockList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Menu,
      children: [
        {
          name: 'stockMenu',
          path: '/stockMenu',
          component: StockMenu
        },
        {
          path: '/login',
          component: Login
        },
        {
          path: '/register',
          component: Register
        },
        {
          path: '/index',
          component: Index
        },
        {
          path: 'sideMenu',
          component: SideMenu,
          children: [
            {
              path: 'myStock',
              component: MyStock
            },
            {
              path: 'stockList',
              component: StockList
            }
        ]
        }
       ]
    }
  ]
})
