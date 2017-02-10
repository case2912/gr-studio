<template lang="html">
<div class="create-button">
  <img :src="'../new-sort.svg'" alt="logo">
    <!-- <p class="create-text">create new sort!</p> -->
</div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.create-button
  position relative
  top 50%
  left 30%
  background-color rgba(0,0,0,0.6)
  border-radius 5px
  border medium double rgba(255,255,255,0.2)
  >img
    top 30%
</style>
