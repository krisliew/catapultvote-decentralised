import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/components/home'
import CreatePoll from '@/components/userComponents/createpoll'
import Result from '@/components/userComponents/result'

export default new Router({
  mode:'history',
  hash:false,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/createpoll',
      name:'CreatePoll',
      component:CreatePoll
    },
    {
      path:'/result',
      name:'Result',
      component:Result
    }
  ]
})