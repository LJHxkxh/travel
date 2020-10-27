<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul v-for="(item,index) in weekendList" :key="index">
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
  data() {
    return {
      weekendList: [
        {
          id: "0002",
          imgUrl: "http://img1.qunarzz.com/sight/source/1505/74/a665dfecf12ae.jpg_r_640x214_5d22909a.jpg",
          title: "南昌必游TOP10",
          desc: "看山看水，看看历史对南昌的浸润"
        },
        {
          id: "0001",
          imgUrl: "http://img1.qunarzz.com/sight/source/1509/6e/49ebb42da82957.jpg_r_640x214_29dfe99b.jpg",
          title: "南昌秋天美",
          desc: "深秋的南昌，秋风徐徐，落叶极美"
        },
        {
          id: "0003",
          imgUrl: "http://img1.qunarzz.com/sight/source/1505/bd/688c12889af7ad.jpg_r_640x214_cc490c32.jpg",
          title: "Happy乐园",
          desc: "在这个玩转乐园，疯玩起来，无忧无虑一整天!"
        },
        {
          id: "0004",
          imgUrl: "http://img1.qunarzz.com/sight/source/1505/df/9bcc134d126bc4.jpg_r_640x214_58a1f389.jpg",
          title: "陶醉青山绿水",
          desc: "一年四季景色秀丽，层峦叠嶂，岩石高高耸立，白雾弥漫，犹如人间仙境"
        },
        {
          id: "0005",
          imgUrl: "http://img1.qunarzz.com/sight/source/1811/24/30f714149293b6.jpg_r_640x214_bfa37f12.jpg",
          title: "狮子峰等你",
          desc: "有黄山之险，悬崖峭壁，这里有满山的翠竹、青藤，堪称人间仙境世外桃源"
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
  .item-img{
    width: 100%;
    margin-top: -0.3rem;
  }
  .item-info{
    flex:1;
    padding: 0.4rem;
    padding-bottom: 0.8rem;
  }
  .item-title{
    font-size: 1rem;
    overflow: hidden;             /*选项名称很长时出现...*/
    white-space: nowrap;          /*选项名称很长时出现...*/
    text-overflow: ellipsis;      /*选项名称很长时出现...*/
  }
  .item-desc{
    line-height: 1rem;
    font-size: 0.8rem;
    margin-top: 0.3rem;
    color: #ccc;
    overflow: hidden;             /*选项名称很长时出现...*/
    white-space: nowrap;          /*选项名称很长时出现...*/
    text-overflow: ellipsis;      /*选项名称很长时出现...*/
  }
</style>

