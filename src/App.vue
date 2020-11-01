<template>
  <div id="app">
    <!-- 显示的是当前路由地址对应的内容 -->
    <keep-alive exclude="Detail">   <!--除了detail，其余页面都会被缓存-->
      <router-view/>
    </keep-alive>  <!--切换路由选择时无需重新加载，提高性能-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
