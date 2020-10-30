<template>
  <div class="">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id" >
        <img class="swiper-img"  :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 4500,
        loop: true
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
      // swiperList: [{
      //   id: '0001',
      //   imgUrl: 'https://xkxh-1303991241.cos.ap-nanjing.myqcloud.com/code/1.png'
      // }, {
      //   id: '0002',
      //   imgUrl: 'https://xkxh-1303991241.cos.ap-nanjing.myqcloud.com/code/2.png'
      // }, {
      //   id: '0003',
      //   imgUrl: 'https://xkxh-1303991241.cos.ap-nanjing.myqcloud.com/code/3.JPG'
      // }, {
      //   id: '0004',
      //   imgUrl: 'https://xkxh-1303991241.cos.ap-nanjing.myqcloud.com/code/4.png'
      // }, {
      //   id: '0005',
      //   imgUrl: 'https://xkxh-1303991241.cos.ap-nanjing.myqcloud.com/code/5.png'
      // }] height: 28rem;
</script>

<style scoped> 
  /* .wrapper >>> .swiper-pagination-bullet-active {
    background: red !important;
  } */    /*改变轮播图图标颜色一直失效*/
  .wrapper {
    overflow: hidden;
    width: 100%;
    /* padding-bottom: 63%;  */
    background-color: #eee;
  }
  .swiper-img {
    width: 100%;
  } 
</style>
