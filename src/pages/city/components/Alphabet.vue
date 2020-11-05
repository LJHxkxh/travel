<template>
  <ul class="list">
    <li 
      class="item" v-for="item of letters" 
      :key="item" 
      :ref="item"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

// @touchstart.prevent="handleTouchStart"
// @touchmove="handleTouchMove"
// @touchend="handleTouchEnd"        手机拖滑字母表选择城市

<script>

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for(let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change',e.target.innerText)
    },
    // handleTouchStart() {
    //   this.touchStatus =  true
    // },
    // handleTouchMove(e) { 
    //   if(this.touchStatus) {
    //     if(this.timer) {
    //       clearTimeout(this.timer)
    //     }
    //     this.timer = setTimeout(() => {
    //       const touchY = e.touches[0].clientY - 300
    //       const index = Math.floor((touchY - this.startY) / 17)
    //       if(index >= 0 && index < this.letters.length){
    //         this.$emit('change',this.letters[index])
    //       }
    //     },16)     //函数节流
    //   }
    // },
    // handleTouchEnd() {
    //   this.touchStatus = false
    // }
  }
}
</script>

<style scoped>
  .list {
    /* display: flex;
    flex-direction:  column;
    justify-content: center; */
    position: fixed;
    right: 0.4rem;
    top: 18.6rem;
  }
  .item {
    text-align: center;
    line-height: 1.1rem;
    font-size: 1rem;
    color: #00bcd4;;
  }
</style>
