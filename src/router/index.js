import Vue from 'vue'
import Router from 'vue-router'
import permissionsList from '@/components/permissionsList/Index.vue'
import user from '@/components/user/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name:'user', redirect: '/user' }, // 默认路由
    {
      path: '/permissionsList',
      name:'permissionsList',
      component: permissionsList
    },
    {
      path: '/user',
      name:'user',
      component: user
    }
  ]
})
