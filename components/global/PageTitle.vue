<template>
  <section :style="sectionStyle" class="page-title-section bg-img cover-background top-position theme-overlay-dark" data-overlay-dark="5"  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>{{ title }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
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