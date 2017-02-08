<template>
<section class="root">
    <HoriSep topHeight="75px">
      <VueButton slot="top"/>
      <VertSep slot="bottom" rightWidth="300px">
        <Inspector slot="right"/>
        <VueEditor slot="left"/>
      </VertSep>
    </HoriSep>
</section>
</template>

<script>
import VueButton from './button.vue';
import VueEditor from './editor.vue';
import Inspector from './inspector.vue'
import VertSep from './vertical-separator.vue';
import HoriSep from './horizontal-separator.vue';
export default {
    components: {
        VueButton,
        VueEditor,
        VertSep,
        HoriSep,
        Inspector
    }
}
</script>

<style lang="stylus">
body, html
    height 100%
    width 100%
    margin 0
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
