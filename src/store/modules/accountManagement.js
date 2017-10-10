import axios from 'axios'
let types = {
    //获取账户管理数据
    GET_ACCOUNT_MANAGEMENT : 'getAccountManagement'
}
const state = {
    accountManagement:[]
}
const actions = {
    getAccountManagement(context,payload){
        axios.get('../static/userList.json')
            .then((res) =>{
            console.log(res.data);
                context.commit(types.GET_ACCOUNT_MANAGEMENT, res.data)
            })
    }
}
const mutations = {
    [types.GET_ACCOUNT_MANAGEMENT](state, {accountManagement}){
        if(Array.isArray(accountManagement) && accountManagement.length > 0){
            state.accountManagement = accountManagement;
        }
    }
}
const getters = {}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}