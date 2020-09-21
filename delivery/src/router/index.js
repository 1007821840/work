import Vue from 'vue'
import VueRouter from 'vue-router'

const Comment = () => import('../views/comment/Comment.vue')
const Goods = () => import('../views/goods/Goods.vue')
const Store = () => import('../views/store/Store.vue')


// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '/comment',
    component: Comment
  },
  {
    path: '',
    component: Goods
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/store',
    component: Store
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
