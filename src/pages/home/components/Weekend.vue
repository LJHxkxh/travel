<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul v-for="(item,index) in list" :key="index">
      <li class="item border-bottom">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info"> 
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style scoped>   
  .title {
    line-height: 2rem;
    background: #eee;
    text-indent: 0.4rem;
    margin-bottom: 0.36rem;
  }
  .item-img {
    width: 100%;
    margin-top: -0.3rem;
  }
  .item-info {
    flex:1;
    padding: 0.4rem;
    padding-bottom: 0.8rem;
  }
  .item-title {
    font-size: 1rem;
    overflow: hidden;             /*选项名称很长时出现...*/
    white-space: nowrap;          /*选项名称很长时出现...*/
    text-overflow: ellipsis;      /*选项名称很长时出现...*/
  }
  .item-desc {
    line-height: 1rem;
    font-size: 0.8rem;
    margin-top: 0.3rem;
    color: #ccc;
    overflow: hidden;             /*选项名称很长时出现...*/
    white-space: nowrap;          /*选项名称很长时出现...*/
    text-overflow: ellipsis;      /*选项名称很长时出现...*/
  }
</style>
