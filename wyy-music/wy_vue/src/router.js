import Vue from 'vue'
import Router from 'vue-router'


import Home from './components/Home'
import login from './components/login'
import loginReal from './components/login_real'
import reg from './components/reg'
import search from './components/common/search'
import musiclist from './components/common/musiclist'
import NotFound from './components/notFound'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: login},
    {path:'/home',component:Home},
    {path:'/login',component:login},
    {path:'/loginReal',component:loginReal},
    {path:'/reg',component:reg},
    {path:'/search',component:search},
    {path:'/musiclist',component:musiclist},
    {path:"*",component:NotFound}, 
  ]
})
