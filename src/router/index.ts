import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '../views/money.vue'
import Labels from '../views/labels.vue'
import Statistics from '../views/statistics.vue'
import NotFound from '../views/notFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  },
  {
    path: '/labels',
    name: 'labels',
    component: Labels
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
