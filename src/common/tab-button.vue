<template lang="html">
  <div class="tab-button-container" :style="{'width':tabWidth}">
    <div class="tab-button">
      <p v-if="open" v-on:click="toggle">{{label}}</p>
      <p v-else v-on:click="toggle">{{label}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ["label", "tabWidth"],
    data: function() {
        return {
            open: false
        };
    },
    methods: {
        toggle: function() {
            this.open = !this.open;
        }
    }
}
</script>

<style lang="stylus">
  .tab-button-container
    padding-top 10px
  
  .tab-button
    height 100%
    border-top-right-radius 5px
    border-top-left-radius 5px
    border thin solid rgba(255,255,255,0.2)
    border-bottom 0px
    background-color rgba(0,0,0,0.2)
    flex 1
</style>
