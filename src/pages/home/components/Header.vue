<template>
	<div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
	</div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
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
    color: #fff;
    width: 3rem;
    float: right;
    margin-right: 0.24rem;
    text-align: center;
  }
  .arrow-icon {
    font-size: 0.48rem;
  }
  
</style>

