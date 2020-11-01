<template>
  <div class="header"> 
    <router-link class="header-abs" to='/' tag="div"
      v-show="showAbs"  
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle" 
    >   <!--绑定动态渐进效果-->
      <router-link to='/'>
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if(top > 60) {
        let opacity = top / 140
        opacity =  opacity > 1 ? 1 : opacity
        this.opacityStyle = {
        opacity: opacity
      }
        this.showAbs = false
      }else {
        this.showAbs = true
      }
    }
  },
  activated() {     //页面展示时
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated() {   //页面即将被替换成新的页面时执行
    window.removeEventListener('scroll',this.handleScroll)
  }
  //页面展示时绑定全局事件，页面被隐藏时去除全局事件，防止全局事件一直被执行，污染其他页面
}
</script>

<style scoped>
  .header-abs {
    position: absolute;
    left: 0.3rem;
    top: 0.5rem;
    width: 2.6rem;
    height: 2.6rem;
    text-align: center;
    border-radius: 2rem;
    background: rgba(0 , 0 , 0 , 0.4);
  }
  .header-abs-back {
    color: #fff;
    margin-top: 0.75rem;
    font-size: 1.1rem;
  }
  .header-fixed {
    z-index: 2;
    position: fixed;
    top: 0;
    width: 100%;
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: 1.05rem;
    text-align: center;
    background: #00bcd4;;
    color: #fff;
  }
  .header-fixed-back {
    position: absolute;   /*不进行定位，图标将无法显示*/
    top: 0;
    left: 0.3rem;
    font-size: 1.1rem;
    color: #fff;
  }
</style>
