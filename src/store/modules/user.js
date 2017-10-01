let types = {
  // 获取用户数据
  GET_USER_INFO:'getUserInfo'
}

const state = {

  // 用户数据
  userInfo:[]
}

const actions = {
  // 获取用户数据
  [types.GET_USER_INFO](context, payLoad){

      // 此处为 ajax 请求
      context.commit(types.GET_USER_INFO, payLoad)
  },


}

const mutations = {

  // 获取用户数据
  [types.GET_USER_INFO](state, payLoad) {

    if (payLoad){

      state.userInfo = payLoad;
    }
  },


}
const getters = {}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
