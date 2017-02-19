<template lang="html">
  <div class="inspector-container">
    <div id="inspector">
      <Material/>
    </div>
  </div>

</template>

<script>
import Material from "./inspector/Material.vue";
export default {
  components:{
    Material
  }
}
</script>

<style lang="stylus">
#inspector
  flex 1
  background rgba(0, 0, 0, 0.2)
  border-radius 0px 5px 5px 5px
  border thin solid rgba(255,255,255,0.2)
  padding 10px
.inspector-container
  display flex
  flex 1
  padding-bottom 10px
  padding-right 10px
</style>
