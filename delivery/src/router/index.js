import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = () => import('../views/home/Home.vue')
// const Book = () => import('../views/book/Book.vue')
// const My = () => import('../views/my/My.vue')
// const Team= () => import('../views/team/Team.vue')
// const Vido=()=>import('../views/vido/Vido.vue')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  // {
  //   path: '/home',
  //   component: Home
  // },
  // {
  //   path: '',
  //   component: Home
  // },
  // {
  //   path: '/book',
  //   component: Book
  // },
  // {
  //   path: '/team',
  //   component: Team
  // },
  // {
  //   path: '/my',
  //   component: My
  // },
  // {
  //   path: '/vido',
  //   component: Vido
  // },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
