<template>
  <div :style="sectionStyle" class="bg-img" :data-overlay-dark="overlayDark">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    overlayDark:  {
      type: Number,
      default: 0
    },
    backgroundImage: String,
  },
  computed: {
    sectionStyle () {
      return `background-image: url('${this.backgroundImage}')`;
    },
  },
};
</script>

<style>
</style>