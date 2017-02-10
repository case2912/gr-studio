<template lang="html">
  <div class="color3-container">
    <ColorBox v-model="attribute.value" v-on:colorChanged="apply"/>
  </div>
</template>

<script>
import ColorBox from "../../common/color-box.vue";
export default {
  components:{
    ColorBox
  },
  props:["attribute"],
  methods:{
    apply:function(v){
      this.attribute.value = v;
      this.$store.commit("setMaterialAttribute",{
        name:attribute.name,
        value:v
      });
    }
  }
}
</script>

<style lang="stylus">
.color3-container
  display flex
  flex-direction row-reverse
</style>
