<template>
  <div class="item bg-img theme-overlay-dark owl-lazy" :data-src="backgroundImage" :data-overlay-dark="overlayDark">
    <div class="container h-100">
      <div class="d-table h-100 w-100">
        <div class="d-table-cell align-middle caption">
          <div class="row align-items-center">
            <div class="col-md-8 overflow-hidden">
              <span class="number d-block">{{ slideNumber }}</span>
              <h3 class="mb-3 h5">{{ subTitle }}</h3>
              <h1 class="text-white mb-4">{{ title }}</h1>
              <!-- <a href="#!" class="butn">
                <span>Lees meer</span>
              </a> -->
            </div>
            <!-- <div v-if="insetImage" class="col-md-4 d-none d-md-block">
              <div class="slider-pic text-right">
                <img :src="insetImage" loading="lazy" />
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    overlayDark: {
      type: Number,
      default: 0,
    },
    backgroundImage: String,
    insetImage: String,
    title: String,
    subTitle: String,
    slideNumber: String,
  },
  computed: {
    sectionStyle() {
      return `background-image: url('${this.backgroundImage}')`
    },
  },
}
</script>

<style>
.owl-carousel .owl-item .owl-lazy[src^=""],
.owl-carousel .owl-item .owl-lazy:not([src]) {
  max-height: unset;
}
.item {
  position: relative;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}
</style>