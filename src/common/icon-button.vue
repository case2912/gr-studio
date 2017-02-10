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
  .icon-button
    width 50px
    height 50px
    border medium solid white
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
