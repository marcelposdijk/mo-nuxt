<template>
  <div class="container-fluid full-screen top-position">
    <div class="row slider-fade1">
      <div class="owl-carousel owl-theme w-100">
        <home-page-slider
          slideNumber="01"
          title="Voor al uw schilderwerk binnen"
          subTitle="De beste klusvrouw ooit!"
          backgroundImage="img/banner/slide1.jpg"
          insetImage="img/banner/slide-img-01.jpg"
        />
      </div>
    </div>
    <!-- <home-page-slider
      slideNumber="02"
      title="Voor al uw behangklussen"
      subTitle="De beste klusvrouw ooit!"
      backgroundImage="img/banner/slide2.jpg"
      insetImage="img/banner/slide-img-02.jpg"
    /> -->
  </div>
</template>

<script>
import HomePageSlider from "@/components/HomePageSlider";
export default {
  components: {
    HomePageSlider,
  },
};
</script>
