import Vue from 'vue'
import Router from 'vue-router'

const user = r => require.ensure([], () => r(require('../components/user/Index.vue')), 'user');
const permissionsList = r => require.ensure([], () => r(require('../components/permissionsList/Index.vue')), 'permissionsList');
const intro = r => require.ensure([], () => r(require('../components/intro/Index.vue')), 'intro');

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name:'user',redirect: '/intro'}, // 默认路由
    { path: '/intro',name:'简述',component: intro},
    {
      path: '/permissionsList',
      name:'权限列表',
      component: permissionsList,
      children: [
        { path: 'index', component: permissionsList,name:'列表1' },
      ]
    },
    {
      path: '/user',
      name:'用户列表',
      // component: user,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: 'index', component: user,name:'列表1' },

        // ...其他子路由
      ]
    }
  ]
})
