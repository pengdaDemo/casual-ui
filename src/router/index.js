import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import StockMenu from '@/components/stock/StockMenu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Menu,
      children: [
        {
          path: '/StockMenu',
          component: StockMenu
        }
       ]
    }
  ]
})
