<template>
  <div>
    <div class="title"><span class="iconfont" style="color:red">&#xe64b;</span>猜你喜欢</div>
    <ul v-for="(item,index) in list" :key="index">
      <li class="item border-bottom">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info"> 
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style scoped>   
  .title {
    /* margin: 0.48rem auto; */
    line-height: 2rem;
    background: #eee;
    text-indent: 0.4rem;
  }
  .item {
    height: 6.8rem;
    width: 100%;
    margin-top: 0.1rem;
  }
  .item-img {
    float: left;
    width: 6rem;
    height: 6rem;
    padding: 0.4rem;
  }
  .item-info {
    flex: 1;
    padding: 0.4rem;
  }
  .item-title {
    font-size: 1.2rem;
    overflow: hidden;             /*选项名称很长时出现...*/
    white-space: nowrap;          /*选项名称很长时出现...*/
    text-overflow: ellipsis;      /*选项名称很长时出现...*/
  }
  .item-desc {
    line-height: 1rem;
    font-size: 0.9rem;
    margin-top: 0.6rem;
    color: #ccc;
    overflow: hidden;             /*选项名称很长时出现...*/
    white-space: nowrap;          /*选项名称很长时出现...*/
    text-overflow: ellipsis;      /*选项名称很长时出现...*/
  }
  .item-button {
    color: #fff;
    font-size: .36rem;
    background: #ffab1e;
    border: 0.0625rem solid #ffab1e;
    border-radius: 0.4rem;
    margin-top: 1rem;
  }
</style>
