// 公共 action
import * as types from './types'
import axios from 'axios'
// import 'fetch-jsonp'
import fetchJsonp from 'fetch-jsonp'
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
        context.commit(types.GET_ACCOUNT_MANAGEMENT,payload)
        // })
    },
    //添加账号
    setAddAccount:function(context,payload){
        context.commit(types.SET_ADD_ACCOUNT,payload);
    },
    //修改账户数据
    alterAccount:function(context,payload){
        context.commit(types.ALTER_ACCOUNT,payload)
    },
    //搜索账户数据
    searchAccountManagement:function(context,payload){
        context.commit(types.SEARCH_ACCOUNT_MANAGEMENT,payload)
    },
    //删除账号
    deleteAccount:function (context,payload){
        context.commit(types.DELETE_ACCOUNT,payload)
    },
    //角色管理信息
    roleManagement:function(context,payload){
        context.commit(types.GET_ROLE_MANAGEMENT,payload)
    },
    //图书主数据
    getBooks:function(context,payload){
        // axios.get('/api')
        // .then((res) =>{
        //     console.log(res);
        //     context.commit(types.GET_BOOKS, res)
        // })
        fetchJsonp('https://api.douban.com/v2/book/search?q=' + payload, {
            jsonpCallback: 'callback',
            jsonpCallbackFunction: 'ziyong'
        }).then( response => {
            return response.json();
        } ).then( data => {
            // this.pages = Math.ceil(data.total / this.prepage);
            // this.result = data;
            // state.root.books=data;
            // console.log(data)
            context.commit(types.GET_BOOKS, data)

        } )

    }

}
