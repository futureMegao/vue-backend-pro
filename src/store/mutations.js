// 公共的 mustaions

import * as types from './types'

export default {
    // 获取基金基础信息
    [types.SET_HISTORY_TABS] (state,payload) {
        // 对象展开运算符 参考：https://vuex.vuejs.org/zh-cn/mutations.html
        state.root.historyTabs = payload;
    }
}

