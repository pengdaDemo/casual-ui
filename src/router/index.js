import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import StockMenu from '@/components/stock/StockMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/stock',
      name: 'StockMenu',
      component: StockMenu
    }
  ]
})
