<template lang="html">
  <div class="color4-container">
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
  computed:{

  },
  methods:{
    apply:function(v){
      this.attribute.value = v;
      this.$store.commit("setMaterialAttribute",{
        name:this.attribute.name,
        value:v
      });
    }
  }
}
</script>

<style lang="stylus">
.color4-container
  display flex
  flex-direction row-reverse
</style>
