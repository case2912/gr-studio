<style lang="stylus">
  .color-box-container
    margin 0 8px
    .color-box
      width 35px
      height 35px
      border-radius 5px
      border solid 1px white
      background-image url(../../images/tp.png)
      background-size 100% 100%
      .color-box-colored
        width 100%
        height 100%
        border-radius 5px
      .color-box-highlight
        width 100%
        height 100%
        border-radius 5px
        background-color black
        opacity 0
        &:hover
          cursor pointer
          opacity 0.2
      .color-box-float
        position relative
        transform translate(-50%,50%)
        z-index 5
        .color-box-float-inner
          position absolute
          right 0px


</style>

<template>
  <div class="color-box-container">
    <div class="color-box" v-on:click.stop>
      <div class="color-box-colored" :style="{'background-color':rgba}" >
        <div class="color-box-highlight" v-on:click="openEditor">
        </div>
      </div>
      <div class="color-box-float" v-if="open">
        <div class="color-box-float-inner">
        <Chrome :value="inputColor" @change-color="changeColor"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Chrome} from "vue-color";
  import Color3 from "grimoirejs-math/ref/Color3";
  import Color4 from "grimoirejs-math/ref/Color4";
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  export default {
    props:["value"],
    data:function(){
      return {
        open:false
      };
    },
    components:{
      Chrome
    },
    methods:{
      openEditor:function(){
        this.open = !this.open;
      },
      changeColor:function(v){
        const colorArray = [v.rgba.r/255,v.rgba.g/255,v.rgba.b/255,v.a];
        const color = this.isColor3?new Color3(colorArray[0],colorArray[1],colorArray[2]):new Color4(colorArray[0],colorArray[1],colorArray[2],colorArray[3]);
        this.$emit("input",color);
        this.$emit("colorChanged",color);
      }
    },
    mounted:function(){
      document.addEventListener("click",()=>{
        this.open = false;
      });
    },
    computed:{
      rgba:function(){
        return `rgba(${this.inputColor.rgba.r},${this.inputColor.rgba.g},${this.inputColor.rgba.b},${this.inputColor.a})`;
      },
      isColor3:function(){
        return (this.value instanceof Color3);
      },
      inputColor:function(){
        const v = this.value;
        const arr = this.isColor3?[this.value.R,this.value.G,this.value.B]:[this.value.R,this.value.G,this.value.B,this.value.A];
        return {
          hex:rgbToHex(arr[0] * 255,arr[1] * 255, arr[2] * 255),
          rgba:{
            r:arr[0] * 255,
            g:arr[1] * 255,
            b:arr[2] * 255,
            a:0
          },
          a:arr[3] !== void 0?arr[3]:1
        };
      }
    }
  }
</script>
