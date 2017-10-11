<template>
    <div>
        <router-view></router-view>
        <div class="accountMangement-nav clearFix">
            <div class="accountMangement-nav-left">
                <el-button type="primary" icon="edit" @click="addAccount">添加</el-button>
                <el-button type="primary" icon="share">启用</el-button>
                <el-button type="primary" icon="delete">禁用</el-button>
                <el-button type="primary" icon="search">删除</el-button>
                <!--<el-button type="primary">上传<i class="el-icon-upload el-icon&#45;&#45;right"></i></el-button>-->
            </div>
            <div class="accountMangement-nav-right">
                <el-input placeholder="搜索用户名，真实姓名" icon="search" v-model="input2" :on-icon-click="handleIconClick"></el-input>
            </div>
        </div>
        <div>
            <el-table
                    ref="multipleTable"
                    :data="accountManagement"
                    border
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="ID"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="user"
                        label="用户名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="realName"
                        label="真实姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="section"
                        label="部门"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="role"
                        label="角色"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="账号状态"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="joinDate"
                        label="加入时间"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button
                                size="small"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                                size="small"
                                type="danger"
                                @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name : 'account-management',
        data() {
            return {
                input2 : '',
                multipleSelection: []
            }
        },
        computed:{
//            ...mapState('accountManagement',{
//                accountManagement:'accountManagement'
//            })
            ...mapState({
                accountManagement : state => state.root.accountManagement,
            })
        },
        methods : {
            //el  自带的方法
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleIconClick(index,row) {
                console.log(index,row);
            },
            //新增账户跳转路由
            addAccount(){
                console.log(this.accountManagement);
                this.$router.push({path:'/accountManagements/addAccount'})
            },
            handleEdit(){
                this.$prompt('请输入邮箱', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            //删除账户数据
            handleDelete(index){
                console.log(index)
                this.deleteAccount(index);
            },
//            ...mapActions('accountManagement',{
//                getAccountManagement : 'getAccountManagement'
//            })
            ...mapActions({
                getAccountManagement:'getAccountManagement',
                deleteAccount :'deleteAccount'
            })
        },
        created(){
            this.getAccountManagement();
        }
    }
</script>

