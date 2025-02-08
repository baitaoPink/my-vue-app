<template>
  <div id="app">
    <div class="sidebar flex flex-col">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- <router-link to="/settings">Settings</router-link> -->
    </div>

    <div class="content">
      <router-view></router-view>  <!-- 路由内容渲染在这里 -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // 'vant-nav-bar': NavBar
  }
};
</script>

<style scoped>
#app {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  padding: 20px;
  background-color: #f4f4f4;
}

.content {
  flex-grow: 1;
  padding: 20px;
}
</style>
