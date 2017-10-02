// 公共 action
import * as types from './types'

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
    }

}
