<template lang="html">
  <div class="icon-button" v-on:click="click">
    <img :src="src"/>
  </div>
</template>

<script>
export default {
  props:["src"],
  methods:{
    click:function(){
      this.$emit("click",this);
    }
  }
}
</script>

<style lang="stylus">
  .icon-button
    width 36px
    height 36px
    border 1px solid white
    border-radius 10px
    background-color rgba(0,0,0,0.1)
    padding 3px
    img
      width 100%
      height 100%
    &:hover
      background-color rgba(0,0,0,0.5)
      cursor pointer
</style>
