import axios from 'axios'

let types = {
    // 获取用户数据
    GET_USER_INFO : 'getUserInfo'
}

const state = {

    // 用户数据
    userInfo : []
}

const actions = {
    // 获取用户数据
    getUserInfo(context, payLoad){

        axios.get('../static/userList.json')
            .then((res) =>{
                context.commit(types.GET_USER_INFO, res.data)
            })
    }

}

const mutations = {

    // 获取用户数据
    [types.GET_USER_INFO](state, {data}) {

        if(Array.isArray(data) && data.length > 0){

            state.userInfo = data;
        }
    },


}
const getters = {}
export default {
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}
