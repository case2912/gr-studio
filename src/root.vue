<template>
<section class="root">
    <HoriSep>
      <VueHeader slot="top" leftWidth="512px" rightWidth="500px">
        <TitleBox slot="header-left"/>
        <ShareState slot="header-middle"/>
        <IconButton src="./biblio_logo.svg" slot="header-right"/>
      </VueHeader>
      <VertSep slot="bottom" rightWidth="300px">
        <Inspector slot="right"/>
        <HoriSep topHeight="50px" slot="left">
          <TabButton label="test" slot="top"/>
          <Editor slot="bottom"/>
        </HoriSep>
      </VertSep>
    </HoriSep>
</section>
</template>

<script>
import VueButton from './button.vue';
import Editor from './editor.vue';
import VueHeader from './header.vue';
import Inspector from './inspector.vue'
import VertSep from './vertical-separator.vue';
import HoriSep from './horizontal-separator.vue';
import Empty from './empty.vue';
import HideCodeButton from './hide-code-button.vue';
import TitleBox from "./title-box.vue";
import IconButton from "./common/icon-button.vue";
import TabButton from './common/tab-button.vue';
import ShareState from "./common/share-state.vue";
import Store from "./stores/root";
export default {
    components: {
        VueButton,
        Editor,
        VueHeader,
        VertSep,
        HoriSep,
        Inspector,
        Empty,
        HideCodeButton,
        TitleBox,
        IconButton,
        TabButton,
        ShareState
    },
    methods:{
      click:function(){
        alert("clicked")
      }
    },
    store:Store
}
</script>

<style lang="stylus">
body, html
    height 100%
    width 100%
    margin 0
    font-family: "Rounded Mplus 1c";
body
    position relative
.root
    position absolute
    top 0px
    left 0px
    width 100%
    height 100%
    margin 0px
input[type="range"]
  opacity 0.8
  -webkit-appearance none;
  width 100%;
  background #eee;
  box-shadow 0 0 1px #666;
  border-radius 20px;

input[type="range"]::-webkit-slider-thumb
  -webkit-appearance none;
  background #333;
  width 20px;
  height 20px;
  border-radius 50%;

input[type="range"]::-webkit-slider-thumb:hover
  background #4286f4;

input[type="range"]::-webkit-slider-thumb:active
  background #116bfc;

</style>
