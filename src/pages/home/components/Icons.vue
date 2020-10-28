<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide> 
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },  
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      })
        return pages;
    }
  }
}
</script>

<style scoped>    
  .icons >>> .swiper-container {
    overflow: hidden;
    height: 0;
    padding-bottom: 40%;      /*设置宽度（相对于body）*/
    margin-top: -0.125rem;    
  }
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    margin-top: 0.2rem;
    padding-bottom: 18%;
  }
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .icon-img-content {
    display: block;
    margin: auto;
    height: 3rem;
  }
  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 3.4rem;
    font-size: 0.8rem;
    text-align: center;
    color: #333;
    overflow: hidden;             /*选项名称很长时出现...*/
    white-space: nowrap;          /*选项名称很长时出现...*/
    text-overflow: ellipsis;      /*选项名称很长时出现...*/
  }
</style>

