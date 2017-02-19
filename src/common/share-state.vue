<template lang="html">
  <div class="share-state-container">
    <div v-on:click="toggle" class="share-state">
      <p :class="{'public-button':isPublic,'private-button':isPrivate}">{{state}}</p>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            state: "private"
        };
    },
    methods: {
        toggle: function() {
            if (this.state === "private") {
                this.state = "public";
            } else {
                this.state = "private";
            }
        }
    },
    computed: {
        isPublic: function() {
            return this.state === "public";
        },
        isPrivate: function() {
            return this.state === "private";
        }
    }
}
</script>

<style lang="stylus">
  .share-state
    margin auto
    width 70px
    height 28px
    border thin solid rgba(255,255,255,0.2)
    border-radius 1px
    background-color rgba(0,0,0,0.1)
  .share-state-container
    width 100px
    height 100%
    display flex
    flex-direction column
    justify-content center
    .public-button
      color #3df78e
    .private-button
      color #db72ff
    >div
      display flex
    &:hover
      cursor pointer
      >div
        background-color rgba(255,255,255,0.7)

    p
      font-weight bold
      margin 0
      margin auto
      vertical-align middle
      user-select none
      color white
      text-shadow: 1px 1px 3px #000;

</style>
