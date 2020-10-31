<template>
<div>
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
  <div class="options"> 
    <div class="option option1"><span class="iconfont arrow-icon">&#xe675;</span>  定位</div>
    <div class="option"><span class="iconfont arrow-icon earth">&#xe844;</span>  必游榜单</div>
  </div>
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
        autoplay: false,
      }
    }
  },  
  computed: {
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
        return pages
    }
  }
}
</script>

<style scoped>    
  .icons >>> .swiper-container {
    overflow: hidden;
    height: 0;
    padding-bottom: 42%;      /*？？？设置高度（相对于body）*/ 
                              /* 当margin或者padding取值是百分比的时候，无论是left，right或者top，bottom，
                              都是以父元素的width为参考物，进行提前占位，避免资源加载时候的闪烁，还可以让高度自适应。  */
  }
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 21%;
  }
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .icon-img-content {
    display: block;
    width: 3.45rem;
    height: 3.45rem;
    margin: 0.3rem auto;
  }
  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 4.1rem;
    font-size: 0.8rem;
    text-align: center;
    color: #333;
    overflow: hidden;             /*选项名称很长时出现...*/
    white-space: nowrap;          /*选项名称很长时出现...*/
    text-overflow: ellipsis;      /*选项名称很长时出现...*/
  }
  .options {
    width: 100%;
    overflow: hidden;
    background: #fff;
  }
  .option {
    width: 49.8%;
    float: left;
    text-align: center;
    line-height: 2rem;
    font-size: 0.9rem;
    color: #333;
    margin-top: 0.38rem;
    padding: 0.4rem 0;
    border-top: 0.0625rem #cccccc solid;
  }
  .option1 {
    border-right: 0.0625rem #cccccc solid;
  }
  .earth {
    font-size: 1.1rem;
  }
</style>
