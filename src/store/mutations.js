// 公共的 mustaions

import * as types from './types'

export default {
    // 设置打开的历史tabs
    [types.SET_HISTORY_TABS] (state, payload) {
        // 对象展开运算符 参考：https://vuex.vuejs.org/zh-cn/mutations.html

        let isExitTab = false;

        let tempTabs = state.root.historyTabs.map((item) =>{

            if(item.path === payload.path){

                isExitTab = true;
                return {name : item.name, path : item.path, colorType : 'primary'};

            } else {

                return {name : item.name, path : item.path, colorType : ''};
            }
        })

        // 如果存在相同的历史记录则不添加
        if(!isExitTab){

            tempTabs.push({name : payload.name, path : payload.path, colorType : 'primary'});
        }

        state.root.historyTabs = tempTabs;
    },

    // 设置面包屑信息
    [types.SET_CRUMBS_Info] (state, payload) {

        state.root.crumbsInfo = payload;
    },
}

