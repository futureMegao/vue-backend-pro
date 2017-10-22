<template>

   <div class="clearFix">
       <div class="right-banner clearFix">
           <el-breadcrumb class="right-banner-breadcrumb right-banner-item" separator="/">
               <el-breadcrumb-item v-for="item in crumbsInfo" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
           </el-breadcrumb>

           <div class="right-banner-item">
               <el-tag
                       @click.native="linkTo(item.path)"
                       v-for="item in historyTabs"
                       closable class="right-banner-tag"
                       @close="handleClose(item)"
                       :type="item.colorType">
                   {{item.name}}
               </el-tag>
           </div>
           <div class="user-dropdown-menu-con">
               <el-col :span="12">
                   <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
                       <el-dropdown-menu slot="dropdown">
                           <el-dropdown-item>个人中心</el-dropdown-item>
                           <el-dropdown-item>退出登录</el-dropdown-item>
                       </el-dropdown-menu>
                   </el-dropdown>
               </el-col>

           </div>
       </div>

       <!--<router-view></router-view>-->
   </div>
</template>
<script>

    import {mapState, mapActions} from 'vuex'

    export default{
        name : 'right-banner',

        computed : {

            ...mapState({
                crumbsInfo : state => state.root.crumbsInfo,
                historyTabs : state => state.root.historyTabs,
            })
        },

        methods : {
            ...mapActions({
                deleteHistoryTabs:'deleteHistoryTabs'
            }),
            linkTo(path){
                this.$router.replace({path : path});
            },
            //删除历史记录tabs
            handleClose(item){
                this.deleteHistoryTabs(item)
            }

        }
    }
</script>