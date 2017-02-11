<template lang="html">
  <div class="sampler2D-container">
    <input type="file" v-on:change="changed" ref="fileInput" :value="file"/>
    <img :src="img"/>
  </div>
</template>

<script>
export default {
    props: ["attribute"],
    data: function() {
        return {
            img: this.attribute.attributes.default,
            file: "",
            changing:false
        };
    },
    methods: {
        changed: function() {
            const input = this.$refs.fileInput;
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const image = new Image();
                    image.src = e.target.result;
                    this.img = e.target.result;
                    this.$store.commit("setMaterialAttribute", {
                        name: this.attribute.name,
                        value: image
                    });
                };
                reader.readAsDataURL(input.files[0]);
                this.changing = true;
            }
        }
    },
    mounted: function() {
      this.$watch("attribute.value",function(){
        if(this.changing){
          this.changing = false;
          return;
        }
        this.img = this.attribute.attributes.default;
        this.file = "";
      });
    }
}
</script>

<style lang="stylus">
.sampler2D-container
  display flex
  flex-direction column
  img
    width 128px
    height 128px
  p
    color yellow
    font-weight 600
</style>
