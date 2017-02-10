<template lang="html">
  <div class="header-separator-container">
    <div class="header-left" :style="{'width':leftWidth}">
      <slot name="header-left"/>
    </div>
    <div class="header-button">
      <slot name="header-button"/>
    </div>
    <div class="header-button2">
      <slot name="header-button2"/>
    </div>
    <div class="header-middle">
      <slot name="header-middle"/>
    </div>
    <div class="header-right" :style="{'width':rightWidth}">
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
  flex-direction row
  display flex
  flex 1
  height 100%
  align-items stretch
  >.header-button
    width 100px
  >.header-button2
    width 40px
  >.header-middle
    flex-grow 1
  >div
    height 100%
</style>
