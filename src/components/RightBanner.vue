<template>

    <div class="right-banner">
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