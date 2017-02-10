<template lang="html">
  <div class="unsupported-container">
    <p>Unsupported</p>
  </div>
</template>

<script>
export default {
  props:["attribute"]
}
</script>

<style lang="stylus">
.unsupported-container
  display flex
  flex-direction row-reverse
  p
    color yellow
    font-weight 600
</style>
