<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-topbottom">
        <div class="item-title-icon"><img class="pic" src="http://s.qunarzz.com/piao/image/touch/sight/detail.png"></div>
        <div class="item-title-info">{{item.title}}</div>
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}

</script>

<style scoped>
  .item-title {
    height: 2.4rem;
    overflow: hidden;
  }
  .pic {
    position: absolute;  /*开启绝对定位，使其脱离文档流，使得info内容得以显示*/
    top: -1.45rem;
    left: 0.3rem;
    width: 1.7rem;
  }
  .item-title-info {
    font-size: 1rem;
    padding-left: 2.1rem;
    padding-top: 0.65rem;
    color: #000;
  }
  .item-children{
    padding: 0 1.2rem;
  }
</style>
