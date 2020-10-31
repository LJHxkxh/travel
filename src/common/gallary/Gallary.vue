<template>
	<div class="container" @click="handlegGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item , index) of imgs" :key="index">
          <img class="gallary-img"  :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handlegGallaryClick() {
      this.$emit('close')
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true         /*自我刷新*/
      }
    }
  }
}
</script>

<style scoped>
  .container >>> .swiper-container {
    overflow: inherit;      /*从父元素中继承*/
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
  }
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 65%;
    background: #fff;;
  }
  .gallary-img {
    width: 100%;
  }
  .swiper-pagination {
    color: #fff;
    font-size: 0.9rem;
    bottom: -3.6rem;
  }
</style>
