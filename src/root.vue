<template>
<section class="root">
  <TitleBox/>
    <HoriSep topHeight="75px">
      <VueHeader slot="top" leftWidth="75px" rightWidth="500px">
        <Logo slot="header-left" src="../biblio_logo.svg"/>
        <HideCodeButton slot="header-button"/>
        <CreateButton slot="header-button2"/>
        <Empty slot="header-middle"/>
        <VueButton slot="header-right"/>
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
import Logo from './logo.vue';
import HideCodeButton from './hide-code-button.vue';
import CreateButton from './create-button.vue'
import TitleBox from "./title-box.vue";
export default {
    components: {
        VueButton,
        Editor,
        VueHeader,
        VertSep,
        HoriSep,
        Inspector,
        Empty,
        Logo,
        HideCodeButton,
        CreateButton,
        TitleBox
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
