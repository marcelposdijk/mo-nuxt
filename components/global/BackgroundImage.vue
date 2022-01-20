<template>
  <div :lazy-background="backgroundImage" class="bg-img" :data-overlay-dark="overlayDark">
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
  }
};
</script>

<style>
</style>