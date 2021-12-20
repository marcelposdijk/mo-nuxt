<template>
  <div>
    <vue-slick-carousel class="project-carousel owl-carousel owl-theme" :arrows="true" :dots="true" :autoplay="true" :slides-to-show="3" :slides-to-scroll="1" :infinite="true">
      <div class="project-item" v-for="project in projects" :key="project.slug">
        <div>
          <img :src="project.image" class="rounded"/>
        </div>
        <div class="project-hover">
          <div class="project-hover-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
          </div>
          <NuxtLink :to="`/projecten/${project.slug}`" class="link-arrow">Zie project<i class="fas fa-long-arrow-alt-right vertical-align-middle display-30 ml-2"></i></NuxtLink>
        </div>
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel"
import "vue-slick-carousel/dist/vue-slick-carousel.css"
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css"
export default {
  components: {
    VueSlickCarousel,
  },
  props: {
    projects: Array,
  },
}
</script>


<style scoped>
.slick-slide img {
  width: 357px;
  height: 446px;
}
.projects-carousel {
  width: 1200px;
}
</style>

