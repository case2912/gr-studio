<template>
<section class="root">
    <HoriSep topHeight="50px">
      <VueHeader slot="top" leftWidth="512px" rightWidth="500px">
        <TitleBox slot="header-left"/>
        <Empty/>
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
        TabButton
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
