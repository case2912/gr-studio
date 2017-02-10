<template lang="html">
  <div class="inspector-header">
    <p>{{label}}</p>
  </div>
</template>

<script>
export default {
  props:["label"]
}
</script>

<style lang="stylus">
  .inspector-header
    background-color gray
    font-size 20px
    >p
      margin 0
      font-weight 600
      text-align center
      color white
</style>
