// 公共 action
import * as types from './types'
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'
import vueCookie from 'vue-cookie'
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
        console.log(payload)
        fetchJsonp('https://api.douban.com/v2/book/search?q=' + payload.keyword + '&start=' + (payload.pages - 1) * 20, {
            jsonpCallback: 'callback',
            jsonpCallbackFunction: 'gao'
        }).then( response => {
            return response.json();
        } ).then( data => {
            context.commit(types.GET_BOOKS, data)
        } )

    },
    //用户登录数据
    getPersonage:function(context,payload){
        var test= vueCookie.get("test")
        var password= vueCookie.get("password")
        var pay=[{
            test:test,
            password:password
        }]
        console.log(pay)
        if(test && password){
            console.log(test,password)
            context.commit(types.GET_PERSONAGE,pay)
        }

    }

}
