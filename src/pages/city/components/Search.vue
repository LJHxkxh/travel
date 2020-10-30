<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名称或拼音">
    </div>  <!--v-model="keyword"双向绑定-->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-topbottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-topbottom" v-show="hasNoData">无相关匹配城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: []
    }
  },
  watch: {
    keyword() {
      if(this.timer) {
        clearTimeout(this.timer)
      }
      if(!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for(let i in this.cities) {   //for-in循环对象,首先取得的是key值
          this.cities[i].forEach((value) => {
            if(value.spell.indexOf(this.keyword) > -1 ||
               value.name.indexOf(this.keyword) > -1){
                 result.push(value)
               }
          })
        }
        this.list = result
      },100)
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick(city) {
      this.$store.commit('changeCity',city)
      this.$router.push('/')
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style scoped>
  .search {
    height: 2rem;
    background: #00bcd4;
  }
  .search-input {
    width: 96%;
    height: 1.5rem;
    line-height: 1.5rem;
    margin: 0 0.29rem;
    text-align: center;
    font-size: 0.9rem;
    border-radius: 0.3rem;
    border: #00bcd4 solid 0.0625rem;
  }
  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 4.4rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
  }
  .search-item {
    line-height: 1.5rem;
    padding: 0.24rem 0.36rem;
    background: #fff;
    color: #666;
  }
</style>
