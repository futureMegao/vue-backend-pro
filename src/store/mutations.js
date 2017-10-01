// 公共的 mustaions

import * as types from './types'

export default {
    // 设置打开的历史tabs
    [types.SET_HISTORY_TABS] (state, payload) {
        // 对象展开运算符 参考：https://vuex.vuejs.org/zh-cn/mutations.html

        let exitTab = state.root.historyTabs.find(x => x.path === payload.path);

        // 如果存在相同的历史记录则不添加
        if(!exitTab){

            state.root.historyTabs.push(payload);
        }
    },

    // 设置面包屑信息
    [types.SET_CRUMBS_Info] (state, payload) {

        state.root.crumbsInfo = payload;
    },
}

