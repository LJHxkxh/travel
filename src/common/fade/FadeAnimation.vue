<template>
  <transition>
    <slot></slot>
  </transition>     <!--通过插槽添加class实现动画效果-->
</template>

<script>
export default {
  name: 'FadeAnimation',
}
</script>

<style scoped>
  .v-enter, .v-leave-to {
    opacity: 0
  }
  .v-enter-active, .v-leave-active {
    transition: opacity 0.5s
  }       /*借助钩子函数实现动效果*/
</style>
