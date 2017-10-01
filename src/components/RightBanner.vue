<template>

    <div class="right-banner">
        <el-breadcrumb class="right-banner-breadcrumb" separator="/">
            <el-breadcrumb-item v-for="item in crumbsInfo" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>

    import {mapState, mapActions} from 'vuex'

    export default{
        name:'right-banner',

        computed:{

            ...mapState({
                crumbsInfo: state => state.root.crumbsInfo
            }),
        },
    }
</script>