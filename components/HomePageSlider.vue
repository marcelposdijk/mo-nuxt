<template>
  <div
    :style="sectionStyle"
    class="item bg-img theme-overlay-dark p-0"
    data-overlay-dark="1"
  >
    <div class="container h-100">
      <div class="d-table h-100 w-100">
        <div class="d-table-cell align-middle caption">
          <div class="row align-items-center">
            <div class="col-md-8 overflow-hidden">
              <span class="number d-block">{{ slideNumber }}</span>
              <h3 class="mb-3 h5">{{ subTitle }}</h3>
              <h1 class="text-white mb-4 w-100 w-sm-85">
                {{ title }}
              </h1>
              <a href="#!" class="butn">
                <span>Lees meer</span>
              </a>
            </div>
            <div class="col-md-4 d-none d-md-block" v-if="insetImage">
              <div class="slider-pic text-right">
                <img :v-html="insetImage" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slideNumber: String,
    title: String,
    subTitle: String,
    backgroundImage: String,
    insetImage: String,
  },
  computed: {
    sectionStyle() {
      return `background-image: url('${this.backgroundImage}');background-size: cover;`;
    },
  },
};
</script>

<style>
.item {
  height: 1400px;
}
</style>