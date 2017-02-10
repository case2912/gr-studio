<template>
  <div class="title-box-container" v-on:click.stop>
    <div v-if="!editable" class="title-box-static-inner rounded-background" v-on:click="toggle">
      <p>{{title}}</p>
    </div>
    <div v-else class="rounded-background">
      <input type="text" v-model="title"/>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      editable:false,
      title:"テスト"
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
    height 50px
    width 512px
    text-shadow: 1px 1px 1px #000;
    input
      outline none
      background-color transparent
      border 0px solid transparent
      color white
      font-size 26px
      text-shadow: 1px 1px 1px #000;
      padding 0 10px
    .rounded-background
      display flex
      justify-content center
      flex-direction column
      height 100%
      border-radius 10px
      background-color rgba(0,0,0,0);
      &:hover
        background-color rgba(0,0,0,0.3);
    .title-box-static-inner
      padding 0 10px
      cursor pointer
      p
        color white
        font-size 26px
        font-weight 400
        margin 0
</style>
