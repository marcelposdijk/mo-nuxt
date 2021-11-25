<template>
  <div>
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <template v-for="image in images">
        <swiper-slide :key="image.id"
          ><img :src="image.url" style="height: 550px; width: 1140px"
        /></swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  name: "SwiperSlideshow",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["images"],
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss">
@import "swiper/swiper.scss";
</style>
