<template>
    <div class="left-bar-menu">
        <el-menu router default-active="2" theme="dark" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-menu-item index="/intro"><i class="el-icon-star-off"></i>简述</el-menu-item>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
                <el-submenu index="1-1">
                    <template slot="title">账号管理</template>
                    <el-menu-item index="/accountManagements/accountManagement">账号管理</el-menu-item>
                    <el-menu-item index="/accountManagements/addAccount">新增账号</el-menu-item>
                    <el-menu-item index="/accountManagements/roleManagement">角色管理</el-menu-item>
                    <el-menu-item index="/accountManagements/addRoles">新增角色</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                    <template slot="title">权限管理</template>
                    <el-menu-item index="/user/index">权限管理</el-menu-item>
                    <el-menu-item index="/accountManagement/addAccount">新增权限</el-menu-item>
                    <el-menu-item index="/user/index">权限</el-menu-item>
                    <el-menu-item index="/user/index">权限管理</el-menu-item>
                </el-submenu>

            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-setting"></i>图书管理</template>
                <el-submenu index="2-1">
                    <template slot="title">图书</template>
                    <el-menu-item index="/books/bookContent">图书主界面</el-menu-item>
                    <el-menu-item index="/books/index">图书主界</el-menu-item>

                </el-submenu>

            </el-submenu>




            <!--<el-menu-item index="3"><i class="el-icon-date"></i>图表</el-menu-item>-->
            <!--<el-menu-item index="3"><i class="el-icon-menu"></i>综合实例</el-menu-item>-->
            <!--<el-menu-item index="3"><i class="el-icon-warning"></i>错误页面</el-menu-item>-->
            <!--<el-menu-item index="3"><i class="el-icon-edit"></i>错误日志</el-menu-item>-->
            <!--<el-menu-item index="3"><i class="el-icon-document"></i>excel</el-menu-item>-->
            <!--<el-menu-item index="3"><i class="el-icon-search"></i>换肤</el-menu-item>-->



        </el-menu>

    </div>
</template>

<script>
    export default{
        name:'left-bar',
        data(){
            return {
                isCollapse: true
            }
        },
        methods : {
            handleOpen(key, keyPath) {
//                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
//                console.log(key, keyPath);
            }

        }
    }
</script>