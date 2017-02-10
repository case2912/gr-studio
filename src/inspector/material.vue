<template lang="html">
  <div class="material-inspector">
    <MaterialHeader label="uniform variables"/>
    <Attribute/>
    <MaterialHeader label="macro variables"/>
  </div>
</template>

<script>

import {mapState} from "vuex";
import MaterialHeader from "./header.vue";
import Attribute from "./attribute.vue";
export default {
  computed:{
    ...mapState(["uniforms"])
  },
  components:{
    MaterialHeader,
    Attribute
  }
}
</script>

<style lang="stylus">
.material-inspector
  height 100%
</style>
