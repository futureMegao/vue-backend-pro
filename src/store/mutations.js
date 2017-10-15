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

        // 如果不存在相同的历史记录则添加
        if(!isExitTab){

            tempTabs.push({name : payload.name, path : payload.path, colorType : 'primary'});
        }

        state.root.historyTabs = tempTabs;
    },

    // 删除 tabs
    [types.DELETE_HISTORY_TABS](state,payload){

        let index = state.root.historyTabs.findIndex(x=>x.path === payload.path);

        state.root.historyTabs.splice(index,1);
    },

    // 设置面包屑信息
    [types.SET_CRUMBS_Info] (state, payload) {

        state.root.crumbsInfo = payload;
    },
    //账号管理信息
    [types.GET_ACCOUNT_MANAGEMENT](state, payload){
        if(Array.isArray(state.root.accountManagement) && payload.length > 0){
            state.root.accountManagement = payload;
        }
    },
    //添加账号
    [types.SET_ADD_ACCOUNT](state,payload){
        state.root.accountManagement.push(payload);
    },
    //修改账号数据
    [types.ALTER_ACCOUNT](state,payload){
        console.log(payload)
        let index=state.root.accountManagement.findIndex(x=>x.index===payload.index)
        state.root.accountManagement.splice(index,1,payload)
    },
    //搜索账户数据
    [types.SEARCH_ACCOUNT_MANAGEMENT](state,payload){
        // console.log(payload)
        let a=state.root.accountManagement
        a.forEach(function(item){
            console.log(item)
        })
        // console.log(a)
    },
    //删除账号
    [types.DELETE_ACCOUNT](state,payload){
        // console.log(state.root.accountManagement[payload])
        console.log(payload)
        let index=state.root.accountManagement.findIndex(x=>x===payload)
        state.root.accountManagement.splice(index,1)
    },
    //角色管理信息
    [types.GET_ROLE_MANAGEMENT](state,payload){
        if(Array.isArray(state.root.roleManagement) && payload.length > 0){
            state.root.roleManagement = payload;
        }
    }
}

