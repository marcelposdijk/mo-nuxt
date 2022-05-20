<template>
  <section class="pb-0">
    <div class="container">
      <div class="section-heading">
        <h2 class="display-20 display-md-18 display-lg-16">Reviews</h2>
        <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">Voor al uw klussen in en om het huis!</p>
      </div>
      <div class="testimonial-carousel owl-carousel owl-theme">
        <div class="testimonial-wrapper" v-for="review in reviews" :key="review.slug">
          <div class="testimonial-content" style="height:600px;">
            <div class="testimonial-image">
              <img width="545" height="745" :src="review.image" alt="..." class="rounded" />
            </div>
            <div class="testimonial-body" style="height: 600px;">
              <div class="quote-text">
                <h4 class="mb-1-9">{{ review.quote }}</h4>
              </div>
              <div class="mb-1-9">
                <nuxt-content :document="review" />
              </div>
              <div class="media">
                <div class="media-body align-self-center">
                  <h5 class="h6 mb-0">{{ review.name }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return { reviews: [] }
  },
  async created() {
    this.reviews = await this.$content("reviews").sortBy("sequenceNumber").fetch()
  },
  mounted() {
    setTimeout(() => {
      $(".testimonial-carousel").owlCarousel({
        loop: false,
        responsiveClass: true,
        autoplay: true,
        smartSpeed: 900,
        nav: false,
        dots: true,
        center: false,
        margin: 15,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          768: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      })
    }, 500)
  },
}
</script>

<style>
</style>