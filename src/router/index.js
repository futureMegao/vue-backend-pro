import Vue from 'vue'
import Router from 'vue-router'

const user = r => require.ensure([], () => r(require('../components/user/Index.vue')), 'user');
const permissionsList = r => require.ensure([], () => r(require('../components/permissionsList/Index.vue')), 'permissionsList');

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name:'user', redirect: '/user/index' }, // 默认路由
    {
      path: '/permissionsList/:id',
      name:'permissionsList',
      component: permissionsList,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: 'index', component: permissionsList },

        // ...其他子路由
      ]
    },
    {
      path: '/user/:id',
      name:'user',
      component: user,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: 'index', component: user },

        // ...其他子路由
      ]
    }
  ]
})
