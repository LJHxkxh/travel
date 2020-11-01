<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="this.bannerImg" >
      <div class="banner-title">{{this.sightName}}</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe6de;</span> {{this.bannerImgs.length}}</div>
    </div>
    <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="closeGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary';
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data() {
    return {
      showGallary: false,
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
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
  .banner-icon {
    font-size: 0.7rem;
  }
</style>
