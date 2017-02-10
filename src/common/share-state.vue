<template lang="html">
  <div class="share-state">
    <div>
      <p :class="{'public-button':isPublic,'private-button':isPrivate}">{{state}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      state:"private"
    };
  },
  computed:{
    isPublic:function(){
      return this.state === "public";
    },
    isPrivate:function(){
      return this.state === "private";
    }
  }
}
</script>

<style lang="stylus">
  .share-state
    height 100%
    display flex
    flex-direction column
    justify-content center
    margin 0px 0px 0px 10px
    .public-button
      background-color #3df78e
    .private-button
      background-color #db72ff
    >div
      display flex
    p
      height 24px
      margin 0
      padding 1px 10px 3px 10px
      text-shadow: 1px 1px 1px #999;
      border-radius 5px
      vertical-align middle
      user-select none
      color white
      &:hover
        cursor pointer
</style>
