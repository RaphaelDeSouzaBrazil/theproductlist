import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import ProductARoute from '@/views/ProductARoute.vue'
import ProductBRoute from '@/views/ProductBRoute.vue'
import ProductCRoute from '@/views/ProductCRoute.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product-a',
    name: 'ProductARoute',
    component: ProductARoute
  },
  {
    path: '/product-b',
    name: 'ProductBRoute',
    component: ProductBRoute
  },
  {
    path: '/product-c',
    name: 'ProductCRoute',
    component: ProductCRoute
  }
]

export default new Router({
  routes
})
