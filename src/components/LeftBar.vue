<template>
    <div class="left-bar-menu">
        <!--<el-menu router default-active="2" theme="dark" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">-->
            <!--<el-menu-item index="/intro"><i class="el-icon-star-off"></i>简述</el-menu-item>-->
            <!--<el-submenu index="1">-->
                <!--<template slot="title"><i class="el-icon-setting"></i>权限</template>-->
                <!--<el-menu-item-group>-->
                    <!--<template slot="title">权限列表</template>-->
                    <!--<el-menu-item index="/permissionsList/index">选项1</el-menu-item>-->
                    <!--<el-menu-item index="sasa">选项2</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--<el-menu-item-group title="用户列表">-->
                    <!--<el-menu-item index="/user/index">选项1</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--<el-submenu index="1-4">-->
                    <!--<template slot="title">选项4</template>-->
                    <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
                <!--</el-submenu>-->
            <!--</el-submenu>-->

            <!--<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>-->
        <!--</el-menu>-->





        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;" class="fixed">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" theme="dark">
            <el-menu-item index="/intro">
                <i class="el-icon-star-off"></i>
                <span slot="title">简述</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="/permissionsList/index">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="/user/index">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
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
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }

        }
    }
</script>