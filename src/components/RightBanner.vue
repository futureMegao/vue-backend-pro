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
               <el-col :span="12" class="test">
                   <el-dropdown trigger="click">
      <span class="el-dropdown-link">
          <span v-model="test"></span>
        {{test}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
                       <el-dropdown-menu slot="dropdown">
                           <el-dropdown-item ><span @click="personage">个人中心</span></el-dropdown-item>
                           <el-dropdown-item>退出登录</el-dropdown-item>
                       </el-dropdown-menu>
                   </el-dropdown>
               </el-col>
                <span class="ivu-avatar">
                    <img src=".././images/img.jpg"/>
                </span>
           </div>
       </div>

       <!--<router-view></router-view>-->
   </div>
</template>
<script>

    import {mapState, mapActions} from 'vuex'
    import vueCookie from 'vue-cookie'
    export default{
        name : 'right-banner',
        data(){
          return {
              test:null
          }
        },
        computed : {

            ...mapState({
                crumbsInfo : state => state.root.crumbsInfo,
                historyTabs : state => state.root.historyTabs,
            }),
//            test(){
//                var test= vueCookie.get("test")
//                return test
//            }
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
            },
            personage(){
                this.$router.push({path:'/personage/personageCenter'});
            }

        },
        created(){
            this.test= vueCookie.get("test")
            console.log(55)
            console.log(this.test)
//            return test
        },
        watch:{

        }
    }
</script>