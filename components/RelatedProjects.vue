<template>
  <div>
    <vue-slick-carousel
      class="related-projects"
      :arrows="true"
      :dots="true"
      :autoplay="true"
      :slidesPerRow="3"
      :infinite="true"
    >
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
  name: "SlickSlideshow",
  components: {
    VueSlickCarousel,
  },
  props: ["projects"],
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

