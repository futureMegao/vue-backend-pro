import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import state from './state'

import createLogger from "../../devtool/vue/plugins/logger";

// user
import user from './modules/user.js';
// permissionsList
import permissionsList from './modules/permissionsList.js';

// 将vuex注入到实例中
Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules : {
        user,
        permissionsList
    },
    plugins : [createLogger()],
    strict : true
});
