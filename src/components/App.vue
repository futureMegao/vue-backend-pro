<template>
    <div id="app">
        <div class="header"></div>
        <!--左侧菜单-->
        <left-bar class="clearFix"></left-bar>

        <!--右侧banner-->
        <div style="overflow:hidden">
            <right-banner></right-banner>

            <router-view></router-view>
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
        }
    }
</script>

