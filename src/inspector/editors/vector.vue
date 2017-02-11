<template lang="html">
  <div class="vector-container">
    <element-input v-for="(v,i) in array" :label="labels[i]" :color="colors[i]" v-model="attribute.value.rawElements[i]" :size="size" v-on:input="changed"/>
  </div>
</template>

<script>
import ElementInput from "../../common/element-input.vue";
export default {
  components:{
    ElementInput
  },
  props:["attribute"],
  computed:{
    colors:function(){
      return ["red","green","blue","gray"];
    },
    labels:function(){
      return ["X","Y","Z","W"]
    },
    array:function(){
      return this.attribute.value.rawElements;
    },
    size:function(){
      return [0,0,100,70,50][this.array.length];
    }
  },
  methods:{
    changed:function(){
      this.$store.commit("setMaterialAttribute",{
        name:this.attribute.name,
        value:this.attribute.value
      })
    }
  }
}
</script>

<style lang="stylus">
.vector-container
  display flex
</style>
