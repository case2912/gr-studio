<template lang="html">
  <div class="header-separator-container">
    <div class="header-left">
      <slot name="header-left"/>
    </div>
    <div class="header-middle">
      <slot name="header-middle"/>
    </div>
    <div class="header-right">
      <slot name="header-right"/>
    </div>
  </div>
</template>

<script>
export default {
  props:["leftWidth","rightWidth"]
}
</script>

<style lang="stylus">
.header-separator-container
  margin 10px 0px
  padding 0 20px
  flex-direction row
  display flex
  flex 1
  height 100%
  align-items stretch
  >.header-middle
    flex-grow 1
  >div
    height 50px
    display flex
    flex-direction column
    justify-content space-around
</style>
