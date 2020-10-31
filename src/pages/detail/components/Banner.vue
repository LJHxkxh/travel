<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1609/94/945ab5b76758703a3.water.jpg_600x330_1c9b0ffa.jpg" >
      <div class="banner-title">滕王阁(AAAAA景区)</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe6de;</span> 23</div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="closeGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary';
export default {
  name: 'DetailBanner',
  data() {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1609/94/945ab5b76758703a3.water.jpg_r_800x800_522afdd5.jpg','http://img1.qunarzz.com/sight/p0/1609/94/945ab5b76758703a3.water.jpg_r_800x800_522afdd5.jpg']
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    closeGallary() {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>
<style scoped>
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;    /*防止页面加载过程中抖动*/
  }
  .banner-img {
    width: 100%;
  }
  .banner-title {
    position: absolute;
    bottom: 0.6rem; 
    left: 0.3rem;
    font-size: 1.1rem;
    color: #fff;
  }
  .banner-number {
    position: absolute;
    bottom: 0.45rem; 
    right: 0.3rem;
    padding: 0.3rem 1rem;
    border-radius: 0.7rem;
    font-size: 0.8rem;
    background: rgba(0 , 0 , 0 , 0.3);
    color: #fff;
  }
  .banner-icon {
    font-size: 0.7rem;
  }
</style>
