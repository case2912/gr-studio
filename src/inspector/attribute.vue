<template lang="html">
  <div class="attribute-container">
    <p>{{attribute.name}}<span class="type">({{attribute.type}})</span></p>
    <div class="attribute-editor">
      <component :is="component" :attribute="attribute"/>
    </div>
  </div>
</template>

<script>
import getEditor from "./editors";
export default {
  props:["attribute","isUniform"],
  computed:{
    component:function(){
      return getEditor(this.attribute,this.isUniform);
    }
  }
}
</script>

<style lang="stylus">
.attribute-container
  font-weight 600
  display flex
  border-bottom solid 0.5px white
  margin 3px 0px
  >p
    margin 3px 0px 3px 5px
    color white
    text-shadow: 1px 1px 1px #999;
    >.type
      color lightgray
      font-weight 400
  .attribute-editor
    flex 1
    padding 5px
</style>
