<template lang="html">
  <div class="tab-button-container">
    <div class="tab-button">
      <p v-if="open" v-on:click="toggle">{{label}}on</p>
      <p v-else v-on:click="toggle">{{label}}off</p>
    </div>
  </div>
</template>

<script>
export default {
  props:["label"],
  data:function(){
    return {
      open:false
    };
  },
  methods:{
    toggle:function(){
      this.open = !this.open;
    }
  }
}
</script>

<style lang="stylus">
  .tab-button-container
    flex 1
    padding 10px
  .tab-button
    border 1px solid white
    border-radius 10px
    background-color rgba(0,0,0,0.1)
    flex 1
</style>
