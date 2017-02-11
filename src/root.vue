<template>
<section class="root">
    <HoriSep class="vue-header">
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
        <VertSep slot="bottom" rightWidth="300px">
            <HoriSep slot="right">
                <VertSep slot="top" class="tab-container" style="padding-right: 10px;">
                    <TabButton label="test" slot="left" tabWidth="80px" />
                    <TabButton label="test" slot="left" tabWidth="80px" />
                    <TabButton label="test" slot="left" tabWidth="80px" />
                </VertSep>
                <Inspector slot="bottom" />
            </HoriSep>
            <HoriSep slot="left">
                <VertSep slot="top" class="tab-container" style="padding-left: 10px;">
                    <TabButton label="test" slot="left" tabWidth="150px" />
                    <TabButton label="test" slot="left" tabWidth="150px" />
                    <TabButton label="test" slot="left" tabWidth="150px" />
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
    }
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
.tab-container
  >div
    display flex
    flex-direction row
</style>
