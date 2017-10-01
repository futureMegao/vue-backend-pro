<template>
  <div id="app">

    <ul class="menu-sub">
      <li>
        <router-link to="/permissionsList">权限列表</router-link>
      </li>
      <li>
        <router-link to="/user">用户列表</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

