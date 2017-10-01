<template>
  <div id="app">

    <div class="top-banner">

    </div>
    <div>
      <div class="left-bar-menu">
        <el-menu router default-active="2" theme="dark" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="2"><i class="el-icon-star-off"></i>简述</el-menu-item>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-setting"></i>权限</template>
            <el-menu-item-group>
              <template slot="title">权限列表</template>
              <el-menu-item index="/permissionsList/index">选项1</el-menu-item>
              <el-menu-item index="/user/index">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="用户列表">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>

      </div>
      <div class="breadcrumb"></div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name : 'app',
    data(){
      return {}
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

