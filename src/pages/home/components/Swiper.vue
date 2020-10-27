<template>
  <div class="">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id" >
        <img class="swiper-img"  :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://imgs.qunarzz.com/p/p35/1809/7e/14d16340f35a2202.jpg_750x500_513c6978.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://imgs.qunarzz.com/sight/p0/201312/17/a938bb49b7379ec1e9954fe222bdb35f.jpg_750x500_352eff02.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://imgs.qunarzz.com/p/p71/1809/50/b5597c7332bef702.jpg_750x500_78e46879.jpg'
      }, {
        id: '0004',
        imgUrl: 'http://imgs.qunarzz.com/sight/p0/1606/dd/dd87923d1930a62990.water.jpg_750x500_6317bdc8.jpg'
      }, {
        id: '0005',
        imgUrl: 'http://imgs.qunarzz.com/p/p61/1503/ef/096e7764d97e63.jpg_750x500_25c19507.jpg'
      }]
    }
  }
}
</script>

<style scoped> 
  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 78%;
    background-color: #eee;
  }
  .swiper-img {
    width: 100%;
  } 
</style>

