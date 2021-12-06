<template>
  <div>
    <vue-slick-carousel class="related-projects footer-carousel owl-carousel owl-theme" :arrows="true" :dots="true" :autoplay="true" :slidesPerRow="3" :infinite="true">
      <div class="single-item" v-for="project in projects" :key="project.slug">
        <div>
          <img :src="project.image" />
        </div>
        <div class="title-holder">
          <h4>
            <a href="#!">{{ project.description }}</a>
          </h4>
          <NuxtLink :to="`/portfolio/${project.slug}`" class="read-more">Lees meer<i class="fas fa-long-arrow-alt-right vertical-align-middle display-30 ml-2"></i></NuxtLink>
        </div>
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel"
import "vue-slick-carousel/dist/vue-slick-carousel.css"
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css"
export default {
  name: "SlickSlideshow",
  components: {
    VueSlickCarousel,
  },
  props: ["projects"],
}
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

