import Vue from 'vue'
import Router from 'vue-router'
// const _import = require('./_import_' + process.env.NODE_ENV)
//懒加载 按需加载
const user = r => require.ensure([], () => r(require('../components/user/Index.vue')), 'user');

const accountManagement = r => require.ensure([], () => r(require('../components/accountManage/accountManagement.vue')), 'accountManagement');

const accountManagements = r => require.ensure([], () => r(require('../components/accountManage/index.vue')), 'accountManagements');

const intro = r => require.ensure([], () => r(require('../components/intro/Index.vue')), 'intro');
const addAccount = r => require.ensure([], () => r(require('../components/accountManage/addAccount.vue')), 'addAccount');

const roleManagement = r => require.ensure([], () => r(require('../components/accountManage/roleManagement.vue')), 'roleManagement');

const addRoles = r => require.ensure([], () => r(require('../components/accountManage/addRoles.vue')), 'addRoles');

Vue.use(Router)

export default new Router({
    routes : [
        {path : '/', name : '简述', redirect : '/intro'}, // 默认路由
        {path : '/intro', name : '简述', component : intro},
        {
            path : '/accountManagements',
            name : '系统管理',
            component : accountManagements,
            children : [
                {path : 'accountManagement', component :accountManagement, name : '账号管理'},
                {path : 'addAccount', component :addAccount, name : '新增账号'},
                {path : 'roleManagement', component : roleManagement, name : '角色管理'},
                {path : 'addRoles', component : addRoles, name : '新增角色'}
            ]
        },
        {
            path : '/user',
            name : '权限管理',
            component : user,
            children : [
                // 当 /user/:id 匹配成功，
                // UserHome 会被渲染在 User 的 <router-view> 中
                {path : 'index', component : user, name : '权限管理'},
                // {path : 'addAccount', component : addAccount, name : '新增权限'},
                {path : 'index', component : user, name : '权限'},
                {path : 'index', component : user, name : '权限管理'}
                // ...其他子路由
            ]
        }
    ]
})
