<template>
  <div>
    <div class="title"><span class="iconfont" style="color:red">&#xe64b;</span>猜你喜欢</div>
    <ul v-for="(item,index) in recommendList" :key="index">
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
  data() {
    return {
      recommendList: [
        {
          id: "0002",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1609/94/945ab5b76758703a3.water.jpg_250x250_ff0fb518.jpg",
          title: "滕王阁",
          desc: "江西省南昌市东湖区仿古街58号"
        },
        {
          id: "0001",
          imgUrl: "https://imgs.qunarzz.com/sight/p0/2006/12/1296c09bc93c1719a3.water.jpg_200x200_54c626f8.jpg",
          title: "南昌融创乐园",
          desc: "江西省南昌市九龙湖新区南龙蟠街888号"
        },
        {
          id: "0003",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1811/af/afa4e4d39dcbf6ffa3.img.jpg_250x250_4f000e2b.jpg",
          title: "梅岭太阳谷",
          desc: "江西省南昌市湾里区梅岭太阳坑（梅岭银杏生态园旁）"
        },
        {
          id: "0004",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1502/b5/b58f7a84a767a624.water.jpg_250x250_3028b3ef.jpg",
          title: "梅岭狮子峰",
          desc: "江西省南昌市湾里区店前以西4公里"
        },
        {
          id: "0005",
          imgUrl: "http://img1.qunarzz.com/sight/p0/2009/9c/9c7a1722efa444b5a3.img.jpg_200x200_d48d017a.jpg",
          title: "海昏侯·龙文化展示馆",
          desc: "江西省南昌新建区大塘乡南昌汉代海昏侯国遗址公园龙文化展示馆"
        }
      ]
    }
  }
}
</script>

<style scoped>   
  .title {
    margin: 0.48rem auto;
    line-height: 2rem;
    background: #eee;
    text-indent: 0.4rem;
  }
  .item {
    height: 6.8rem;
    width: 100%;
    margin-top: 0.1rem;
  }
  .item-img{
    float:left;
    width: 6rem;
    height: 6rem;
    padding: 0.4rem;
  }
  .item-info{
    flex:1;
    padding: 0.4rem;
  }
  .item-title{
    font-size: 1.2rem;
    overflow: hidden;             /*选项名称很长时出现...*/
    white-space: nowrap;          /*选项名称很长时出现...*/
    text-overflow: ellipsis;      /*选项名称很长时出现...*/
  }
  .item-desc{
    line-height: 1rem;
    font-size: 0.9rem;
    margin-top: 0.6rem;
    color: #ccc;
    overflow: hidden;             /*选项名称很长时出现...*/
    white-space: nowrap;          /*选项名称很长时出现...*/
    text-overflow: ellipsis;      /*选项名称很长时出现...*/
  }
  .item-button{
    color: #fff;
    font-size: .36rem;
    background: #ffab1e;
    border: 0.0625rem solid #ffab1e;
    border-radius: 0.4rem;
    margin-top: 1rem;
  }
</style>

