<template lang="html">
  <div class="float-editor-ranged">
    <input type="range" v-model="attribute.value" v-on:input="changed" :max="max" :min="min" :step="step"/>
    <p>{{formatted}}</p>
  </div>
</template>

<script>
export default {
  props:["attribute"],
  methods:{
    changed:function(){
      this.$store.commit("setMaterialAttribute",{
        name:this.attribute.name,
        value:this.attribute.value
      })
    }
  },
  computed:{
    min:function(){
      return this.attribute.attributes.range.split(",")[0]
    },
    max:function(){
      return this.attribute.attributes.range.split(",")[1]
    },
    step:function(){
      const step = this.attribute.attributes.range.split(",")[2];
      if(step !== void 0){
        return step;
      }else{
        return (this.max - this.min) / 100;
      }
    },
    formatted:function(){
      return (+this.attribute.value).toFixed(3)
    }
  }
}
</script>

<style lang="stylus">
.float-editor-ranged
  display flex
  flex-direction column
  p
    margin 0 auto
    text-align center
    text-shadow: 1px 1px 1px #999;
    color white
  input
    background-color rgba(0,0,0,0.1)
    outline none
    border solid 1px dimgray
    color white
    font-size 24px
    width 100%
    text-shadow: 1px 1px 1px #999;

</style>
