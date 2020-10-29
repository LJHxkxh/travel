<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style scoped>
  .list {
    /* display: flex;
    flex-direction:  column;
    justify-content: center; */
    position: absolute;
    right: 0.4rem;
    top: 15rem;
  }
  .item {
    text-align: center;
    line-height: 1rem;
    font-size: 0.6rem;
    color: #00bcd4;;
  }
</style>


