<template lang="html">
  <div class="attribute-container">
    <p>{{attribute.name}}<span class="type">({{attribute.type}})</span></p>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      attribute:{
        name:"test",
        type:"float"
      }
    };
  }
}
</script>

<style lang="stylus">
.attribute-container
  font-weight 600
  >p
    margin 3px 0px 3px 5px
    color white
    >.type
      color lightgray
      font-weight 400
</style>
