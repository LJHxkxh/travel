<template>
	<div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">
      城市<span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
	</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped>    
  .header {           /*1rem = 16px*/
    display: flex;                
    line-height: 2.4rem;    /*居中效果*/
    background: #00bcd4;
    color: #fff;
  }
  .header-left {
    width: 2rem;
    float: left;
  }
  .back-icon {
    text-align: center;
    font-size: 1.1rem;
  }
  .header-input {
    flex: 1;
    line-height: 1.6rem;
    margin: auto 0.24rem;
    padding-left: 0.2rem;
    color: #B0C4DE;
    background: #fff;
    border-radius: .2rem;
  }
  .header-right {
    width: 3rem;
    float: right;
    margin-right: 0.24rem;
    text-align: center;
  }
  .arrow-icon {
    font-size: 0.48rem;
  }
  
</style>

