<template lang="html">
  <div class="element-input-container">
    <div class="element-index-container" :style="style">
      <p>{{label}}</p>
    </div>
    <input type="text" v-on:input="changed" v-model="value" :style="inputStyle"/>
  </div>
</template>

<script>
export default {
  props:["label","value","color","size"],
  computed:{
    style:function(){
      return {
        border:`solid 1px ${this.color}`,
        color:this.color
      };
    },
    inputStyle:function(){
      return {
        width:this.size + "px"
      };
    }
  },
  methods:{
    changed:function(){
      this.$emit("input",this.value);
    }
  }
}
</script>

<style lang="stylus">
.element-input-container
  display flex
  p
    margin 3px
  input
    flex 1
    outline none
    border 0px
    background-color rgba(0,0,0,0.4)
    color white
    font-size 24px
    &:hover
      background-color black
</style>
