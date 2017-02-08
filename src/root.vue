<template>
<section class="root">
    <HoriSep topHeight="30px">
      <VueButton slot="top"/>
      <VertSep slot="bottom" rightWidth="250px">
        <VueButton slot="right"/>
        <VueButton slot="left"/>
      </VertSep>
    </HoriSep>
</section>
</template>

<script>
import VueButton from './button.vue';
import VueEditor from './editor.vue';
import VertSep from './vertical-separator.vue';
import HoriSep from './horizontal-separator.vue';
export default {
    components: {
        VueButton,
        VueEditor,
        VertSep,
        HoriSep
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
