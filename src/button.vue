<template lang="html">
<div class="button">
  <!-- <div class="button-innner"> -->
    <!-- <p>{{label}}</p> -->
  <!-- </div> -->
</div>
</template>

<script>
export default {
  props:["label"]
}
</script>

<style lang="stylus">
.button
  flex 1
  background-color rgba(0,0,0,0.5)
  height 100%
  border-radius 10px
  border thin solid #ff00ff
  margin 0px
</style>
