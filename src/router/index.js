import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const asyncRouterMap = [
  { path: 'login', component: import('@/views/login') }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: asyncRouterMap
})
