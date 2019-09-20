import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/components/staticComponent/home'
import CreatePoll from '@/components/functionalComponent/createpoll'
import Result from '@/components/functionalComponent/result'

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