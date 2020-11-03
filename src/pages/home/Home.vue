<template>
	<div>
    <home-header></home-header>    <!--绑定数值，父元素向子元素传递数据-->
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      axios.get('/static/mock/index.json?city=' + this.city)  //api会转换成static/mock
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data            //接收ajax请求返回的数据
        // this.city = data.city
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {       //页面首次加载时执行
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated() {     //页面被重新加载时执行
    if(this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }             //只有当城市改变时，才会重新发送ajax请求
}
</script>

<style></style>
