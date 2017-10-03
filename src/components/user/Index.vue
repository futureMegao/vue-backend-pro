<template>
    <div class="user-list">
        <el-table :data="userInfo" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name : 'user',
        data() {
            return {

            }
        },

        computed:{
            ...mapState('user',{
                userInfo:'userInfo'
            })
        },

        methods : {

            ...mapActions('user',{
                getUserInfo : 'getUserInfo'
            }),

        },

        created(){

            this.getUserInfo();
        }

    }
</script>

