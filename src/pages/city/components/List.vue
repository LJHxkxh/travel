<template>
	<div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">南昌</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-topbottom">{{innerItem.name}}</div>
        </div>
      </div>
	  </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped>
  .border-topbottom:brfore {
    border-color: #ccc;
  }
  .border-topbottom:after {
    border-color: #ccc;
  }
  .list {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 4.4rem;
    bottom: 0;
  }
  .title {
    line-height: 1.4rem;
    font-size: 0.95rem;
    padding-left: 0.35rem;
    padding-top: 0.04rem;
    padding-bottom: 0.04rem;
    background: #eee;
    color: #666;
  }
  .button-list {
    overflow: hidden;     /*触发BFC, 防止父元素高度塌陷*/
    padding: 0.4rem 0.2rem;
  }
  .button-wrapper {
    float: left;
    width: 30%;
    margin: 0.2rem 0.15rem;
  }
  .button {
    text-align: center;
    padding: 0.2rem 0;
    border: #ccc solid 0.0625rem;
    border-radius: 0.25rem;
  }
  .item-list {
    padding-left: 0.35rem;
    line-height: 1.8rem;
    font-size: 1rem;
  }

</style>


