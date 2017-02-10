<template>
<section class="root">
    <HoriSep topHeight="70px">
      <VueHeader slot="top" leftWidth="512px" rightWidth="500px">
        <TitleBox slot="header-left"/>
        <ShareState slot="header-middle"/>
        <IconButton src="./biblio_logo.svg" slot="header-right"/>
      </VueHeader>
      <VertSep slot="bottom" rightWidth="300px">
        <Inspector slot="right"/>
        <Editor slot="left"/>
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
import ShareState from "./common/share-state.vue";
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
        ShareState
    },
    methods:{
      click:function(){
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
</style>
