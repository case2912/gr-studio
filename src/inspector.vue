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
  border-radius 5px
  border medium solid rgba(255,255,255,0.2)
  padding 10px
.inspector-container
  display flex
  flex 1
  height 100%
</style>
