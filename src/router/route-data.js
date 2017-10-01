export default routeData = [
  { path: '/',name:'user', redirect: '/user/index' }, // 默认路由
  {
    path: '/permissionsList/:id',
    name:'权限列表',
    component: permissionsList,
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: 'index', component: permissionsList,name:'列表1' },

      // ...其他子路由
    ]
  },
  {
    path: '/user/:id',
    name:'用户列表',
    component: user,
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: 'index', component: user,name:'列表1' },

      // ...其他子路由
    ]
  }
]
