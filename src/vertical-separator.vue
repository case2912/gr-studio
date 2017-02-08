<template lang="html">
  <div class="vertical-separator-container">
    <div class="left">
      <slot name="left"/>
    </div>
    <div class="right" :style="{'width':rightWidth}">
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
export default {
  props:["rightWidth"]
}
</script>

<style lang="stylus">
.vertical-separator-container
  flex-direction row
  display flex
  flex 1
  height 100%
  align-items stretch
  >.left
    flex-grow 1
  >div
    height 100%
</style>
