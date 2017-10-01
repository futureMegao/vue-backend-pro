// 公共 action
import * as types from './types'

export default {

  // 设置历史记录 tabs
  setHistoryTabs:function(context,payLoad){

    context.commit(types.SET_HISTORY_TABS,payLoad);
  }
}
