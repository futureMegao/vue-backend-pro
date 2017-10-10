// 公共 action
import * as types from './types'
import axios from 'axios'

export default {

    // 设置历史记录 tabs
    setHistoryTabs : function(context, payLoad){

        context.commit(types.SET_HISTORY_TABS, payLoad);
    },

    // 设置面包屑信息
    setCrumbsInfo : function(context, payLoad){

        context.commit(types.SET_CRUMBS_Info, payLoad);

    },

    //设置删除历史记录tabs
    deleteHistoryTabs:function(context,payload){

        context.commit(types.DELETE_HISTORY_TABS,payload);
    },

    //设置账号管理信息
    getAccountManagement:function(context,payload){
        // axios.get('../static/userList.json')
        // .then((res) =>{
        //     console.log(res.data);
        //     context.commit(types.GET_ACCOUNT_MANAGEMENT, res.data.accountManagement)
        console.log(context)
        context.commit(types.GET_ACCOUNT_MANAGEMENT,payload)

        // })
    },
    //添加账号
    setAddAccount:function(context,payload){
        context.commit(types.SET_ADD_ACCOUNT,payload);
    }
}
