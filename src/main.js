// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router'

import './css/index.css'
import './css/custome.css'


import {Menu, Submenu, MenuItem, MenuItemGroup, Breadcrumb, BreadcrumbItem,Tag} from 'element-ui'

Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Tag.name, Tag)


import store from './store/index.js'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el : '#app',
    store,
    router,
    template : '<App/>',
    components : {App}
})
