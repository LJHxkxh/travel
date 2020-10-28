<template>
	<div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名称">
	</div>
</template>

<script>

export default {
  name: 'CitySearch'
}
</script>

<style scoped>
  .search {
    height: 2rem;
    background: #00bcd4;
  }
  .search-input {
    width: 96%;
    height: 1.5rem;
    line-height: 1.5rem;
    margin:0 0.29rem;
    text-align: center;
    font-size: 0.9rem;
    border-radius: 0.3rem;
    border: #00bcd4 solid 0.0625rem;
  }
</style>

