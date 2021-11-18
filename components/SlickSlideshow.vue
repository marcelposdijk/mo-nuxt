<template>
  <div>
    <vue-slick-carousel :arrows="true" :dots="true">
      <div v-for="image in images" :key="image.id">
        <img :src="image.url" style="height:550px;width:1140px;" />
      </div>
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
  props: [
    "images"
  ],
};
</script>
