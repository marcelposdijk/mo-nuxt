<template>
  <div>
    <h1>Test Swiper</h1>
    <vue-slick-carousel class="related-projects" :arrows="true" :dots="true" :autoplay="true" :slidesPerRow="3">
      <template v-for="project in projects">
        <swiper-slide :key="project.slug"
          ><img :src="project.image"
        /></swiper-slide>
      </template>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  layout(context) {
    return "minimal";
  },
  components: {
    VueSlickCarousel,
  },
};
</script>

<style scoped>
.slick-slide img {
  width: 357px;
  height: 446px;
}
.related-projects {
  width: 1200px;
}
</style>