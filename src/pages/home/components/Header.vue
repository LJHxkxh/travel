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
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])     //mapState:将city公用数据映射到名为city的计算属性中
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
    padding-top: 0.2rem;
  }
  .header-input {
    flex: 1;
    line-height: 1.6rem;
    margin: 0.4rem;
    padding: 0.2rem;
    color: #B0C4DE;
    background: #fff;
    border-radius: .2rem;
  }
  .header-right {
    color: #fff;
    min-width: 3rem;
    float: right;
    padding-top: 0.2rem;
    margin-right: 0.28rem;
    text-align: center;
    overflow: hidden;             /*选项名称很长时...*/
    white-space: nowrap;          /*选项名称很长时...*/
    text-overflow: ellipsis;      /*选项名称很长时...*/
  }
  .arrow-icon {
    font-size: 0.48rem;
  }
</style>
