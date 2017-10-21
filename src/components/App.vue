<template>
    <div id="app" class="clearFix">

        <div>
            <div class="header"></div>
            <!--左侧菜单-->
            <left-bar class="clearFix left-bar"></left-bar>

            <!--右侧banner-->
            <div  class="right-bar">
                <right-banner></right-banner>

                <router-view></router-view>
            </div>
        </div>
        <div class="mask">
            <div class="login" >
                <div class="ivu-card">
                    <div class="ivu-card-head">
                        <p>>欢迎登录</p>
                    </div>
                    <div class="ivu-card-body">
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapState, mapActions} from 'vuex'

    import leftBar from './LeftBar.vue'
    import rightBanner from './RightBanner.vue'

    export default {
        name : 'app',
        components : {leftBar, rightBanner},
        data(){
            return {}
        },
        methods : {
            ...mapActions({
                setCrumbsInfo : 'setCrumbsInfo',
                setHistoryTabs : 'setHistoryTabs'
            }),

            // 添加历史记录
            addHistoryTab(tabInfo){

                // 简介不添加到历史记录
                if(tabInfo.path !== '/intro'){

                    this.setHistoryTabs(tabInfo);
                }
            }

        },
        watch : {

            $route(to, from){
                let crumbs = [];

                to.matched.forEach((item) =>{

                    crumbs.push({name : item.name, path : item.path});
                })

                if(crumbs.length > 0){

                    // 设置面包屑信息
                    this.setCrumbsInfo(crumbs);

                    // 设置历史记录
                    this.addHistoryTab(crumbs[crumbs.length - 1])
                }
            }
        },
        directives:{
            mask:{
                inserted:function(el){
                    console.log(el,window.screen.height)
                    el.style.height= window.screen.height+"px"
                }
            }
        }
    }
</script>

