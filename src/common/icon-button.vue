<template lang="html">
  <div class="icon-button-container">
    <div class="icon-button" v-on:click="click">
      <img :src="src"/>
    </div>
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
.icon-button-container
  display flex
  justify-content center
  flex-direction column
  padding 10px 10px 10px 0px
  .icon-button
    width 40px
    height 40px
    border thin solid rgba(255,255,255,0.2)
    border-radius 1px
    background-color rgba(0,0,0,0.1)
    padding 3px

    img
      width 100%
      height 100%
      opacity 0.6
    &:hover
      background-color rgba(255,255,255,0.7)
      cursor pointer
</style>
