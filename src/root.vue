<template>
<section class="root">
    <HoriSep class="vue-header" topHeight="70px">
        <VertSep slot="top" leftWidth="512px" rightWidth="400px">
            <VertSep slot="left" class="tab-container">
                <TitleBox slot="left" />
                <ShareState slot="left" />
            </VertSep>
            <VertSep slot="right" class="tab-container">
                <IconButton src="../SVG/file-empty.svg" slot="right" />
                <IconButton src="../SVG/copy.svg" slot="right" />
                <IconButton src="../SVG/enlarge.svg" slot="right" />
                <IconButton src="../SVG/home3.svg" slot="right" />
            </VertSep>
        </VertSep>
        <VertSep slot="bottom" rightWidth="500px">
            <HoriSep slot="right" topHeight="40px">
                <VertSep slot="top" class="tab-container" style="padding-right: 10px;">
                    <TabButton label="" slot="left" tabWidth="80px" />
                    <TabButton label="" slot="left" tabWidth="80px" />
                    <TabButton label="" slot="left" tabWidth="80px" />
                </VertSep>
                <Inspector slot="bottom" />
            </HoriSep>
            <HoriSep slot="left" topHeight="40px">
                <VertSep slot="top" class="tab-container" style="padding-left: 10px;">
                    <TabButton label="" slot="left" tabWidth="150px" />
                    <TabButton label="" slot="left" tabWidth="150px" />
                    <TabButton label="" slot="left" tabWidth="150px" />
                </VertSep>
                <Editor slot="bottom" />
            </HoriSep>
        </VertSep>
    </HoriSep>
</section>
</template>

<script>
import Editor from './editor.vue';
import Inspector from './inspector.vue'
import VertSep from './vertical-separator.vue';
import HoriSep from './horizontal-separator.vue';
import TitleBox from "./title-box.vue";
import IconButton from "./common/icon-button.vue";
import TabButton from './common/tab-button.vue';
import ShareState from "./common/share-state.vue";
import Store from "./stores/root";
export default {
    components: {
        Editor,
        VertSep,
        HoriSep,
        Inspector,
        TitleBox,
        IconButton,
        TabButton,
        ShareState
    },
    methods: {
        click: function() {
            alert("clicked")
        }
    },
    store: Store
}
</script>

<style lang="stylus">
body, html
    height 100%
    width 100%
    margin 0
    font-family "Rounded Mplus 1c"
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
  border-radius 5px;

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

.tab-container
  >div
    display flex
    flex-direction row
</style>
