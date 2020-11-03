<template>
	<div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
	</div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      categoryList: [],
    }
  },
  mounted() {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo() {
      axios.get('/static/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
  },
    getDetailInfoSucc(res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data            //接收ajax请求返回的数据
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
}
</script>

<style scoped>
  .content {
    height: 100rem;
  }  
</style>
