import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import state from './state'

import createLogger from "../../devtool/vue/plugins/logger";

// user  用户
import user from './modules/user.js';
// permissionsList
import permissionsList from './modules/permissionsList.js';
//accountManagement  账号管理
import accountManagement from './modules/accountManagement.js';


// 将vuex注入到实例中
Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules : {
        user,
        permissionsList,
        accountManagement

    },
    plugins : [createLogger()],
    strict : true
});
