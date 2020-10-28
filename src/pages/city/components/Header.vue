<template>
	<div class="header">
    城市选择
    <router-link to='/'>
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
	</div>
</template>

<script>

export default {
  name: 'CityHeader'
}
</script>

<style scoped>
  .header {
    position: relative;
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: 1.05rem;
    text-align: center;
    background: #00bcd4;;
    color: #fff;
  }
  .header-back {
    position: absolute;   /*不进行定位，图标将无法显示*/
    top: 0;
    left: 0.3rem;
    font-size: 1.1rem;
    color: #fff;
  }
</style>


