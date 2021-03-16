import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  if (document.getElementsByClassName('musci-right')[0] !== undefined) {
    document.getElementsByClassName('musci-right')[0].scrollTop = 0
  }
})
export default router