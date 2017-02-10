<template lang="html">
  <div class="horizontal-separator-container">
    <div class="top">
      <slot name="top"/>
    </div>
    <div class="bottom" >
      <slot name="bottom" />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.horizontal-separator-container
  display flex
  height 100%
  flex-direction column
  >.bottom
    display flex
    flex 1
    flex-direction row
    align-items stretch
</style>
