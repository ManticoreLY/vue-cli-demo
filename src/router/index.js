import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const asyncRouterMap = [
  { path: '/login', component: import('@/views/login/index') }
]

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: asyncRouterMap
})

export default router
