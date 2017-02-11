<template>
  <div class="title-box-container" v-on:click.stop>
    <!-- <div v-if="!editable" class="title-box-static-inner rounded-background" v-on:click="toggle">
      <p>{{title}}</p>
    </div>
    <div v-else class="rounded-background">
      <input type="text" v-model="title" placeholder="Title"/>
    </div> -->
    <div class="title-box-static-inner rounded-background">
      <input type="text" v-model="title" placeholder="Title"/>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      editable:false,
      title:""
    };
  },
  methods:{
    toggle:function(){
      this.editable = !this.editable;
    }
  },
  mounted:function(){
    document.addEventListener("click",()=>{
      this.editable = false;
    });
  }
}
</script>

<style lang="stylus">
  .title-box-container
    height 100%
    display flex
    flex-direction column
    justify-content center
    width 512px
    text-shadow: 1px 1px 1px #000;
    padding-left 10px
    input
      outline none
      background-color transparent
      border 0px solid transparent
      color white
      font-size 26px
      /*text-shadow: 1px 1px 1px #000;*/
      padding 0 10px
      font-family "Rounded Mplus 1c"
    .rounded-background
      display flex
      justify-content center
      flex-direction column
      height 50px
      border-radius 10px
      background-color rgba(0,0,0,0.1);
      &:hover
        background-color rgba(0,0,0,0.3);
    .title-box-static-inner
      padding 0 10px
      cursor pointer
      p
        font-family: "Rounded Mplus 1c";
        color white
        font-size 26px
        font-weight 400
        margin 0
</style>
