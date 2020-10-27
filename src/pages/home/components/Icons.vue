<template>
<div class="icons">
  <swiper>
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
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
        desc: '海外酒店'
      },{
        id: '0002',
        imgUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
        desc: '低价机票'
      },{
        id: '0003',
        imgUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
        desc: '汽车票船票'
      },{
        id: '0004',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      },{
        id: '0005',
        imgUrl: 'https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png',
        desc: '特惠酒店'
      },{
        id: '0006',
        imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
        desc: '民宿客栈'
      },{
        id: '0007',
        imgUrl: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png',
        desc: '专车自驾'
      },{
        id: '0008',
        imgUrl: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png',
        desc: '一日游'
      },{
        id: '0009',
        imgUrl: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png',
        desc: '旅游团购'
      },{
        id: '0010',
        imgUrl: 'https://img1.qunarzz.com/order/comp/2007/23/734c3c62d2adce02.png',
        desc: '行程设计'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this,this.iconList.forEach((item, index) => {
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
  .icons >>> .swiper-container{
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
  .icon-img{
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

