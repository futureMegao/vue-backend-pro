<template>
    <div>
        <div class="accountMangement-nav clearFix">
            <div class="accountMangement-nav-left">
                <el-button type="primary" icon="edit">新增</el-button>
                <el-button type="primary" icon="search">删除</el-button>
                <!--<el-button type="primary">上传<i class="el-icon-upload el-icon&#45;&#45;right"></i></el-button>-->
            </div>
            <div class="accountMangement-nav-right">
                <el-input placeholder="搜索用户名，真实姓名" icon="search" :on-icon-click="handleIconClick"></el-input>
            </div>

            <div>
                <el-table
                        ref="multipleTable"
                        :data="roleManagement"
                        border
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="角色ID"
                            label="角色ID"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="角色名称"
                            label="角色名称"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="基本权限"
                            label="基本权限"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="操作权限"
                            label="操作权限"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            prop="创建时间"
                            label="创建时间"
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
        </div>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: 'role-management',
        computed:{
            ...mapState({
                roleManagement:state=>state.root.roleManagement
            })
        },
        methods:{
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
            handleEdit(index,row){
                console.log(index,row)
            },
            ...mapActions({
                getRoleManagement:'getRoleManagement'
            })
        },
        created(){
            this.getRoleManagement();
        }
    }
</script>