import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior ( ) {
    return { x: 0, y: 0 }
  }
})
