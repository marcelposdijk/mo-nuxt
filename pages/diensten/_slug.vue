<template>
  <div>
    <page-title :title="service.title" :backgroundImage="backgroundImage" />
    <section class="mt-1-6" style="padding: 0">
      <div class="container">
        <div class="mb-2-9" v-if="service.images">
          <slick-slideshow
            ref="carousel"
            :images="carouselImages"
          ></slick-slideshow>
        </div>
        <div class="row mb-2-6">
          <div class="col-lg-7 mb-2-6 mb-lg-0">
            <article>
              <nuxt-content :document="service" />
            </article>
          </div>
          <div class="col-lg-4 offset-lg-1">
            <h3 class="mb-1-6">service Informatie</h3>
            <div class="service-info-content">
              <ul>
                <li v-if="service.location">
                  <div class="media">
                    <i class="ti-location-pin align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">Locatie</h4>
                      <p class="mb-0 mt-n2">{{ service.location }}</p>
                    </div>
                  </div>
                </li>
                <li v-if="service.m2">
                  <div class="media">
                    <i class="ti-ruler-pencil align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">Vierkante Meters</h4>
                      <p class="mb-0 mt-n2">
                        {{ service.m2 }} m<sup class="letter-spacing-1">2</sup>
                      </p>
                    </div>
                  </div>
                </li>
                <li v-if="service.year">
                  <div class="media">
                    <i class="ti-calendar align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">service Jaar</h4>
                      <p class="mb-0 mt-n2">{{ service.year }}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media">
                    <i class="ti-user align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">serviceleider</h4>
                      <p class="mb-0 mt-n2">
                        {{
                          service.lead
                            ? service.lead
                            : "Monique van den Nouweland"
                        }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row mb-2-3 mb-lg-2-9">
          <div class="col-lg-12">
            <div
              class="
                portfolio-navigation-wrap
                border-top border-bottom border-color-extra-light-gray
              "
            >
              <ul class="portfolio-navigation">
                <li>
                  <NuxtLink
                    v-if="prev"
                    :to="{
                      name: 'portfolio-slug',
                      params: { slug: prev.slug },
                    }"
                    rel="prev"
                  >
                    <i class="fas fa-angle-left display-30 display-md-29"></i>
                    <span class="ml-3 display-30 display-md-29 font-weight-600"
                      >Vorige</span
                    >
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services">
                    <i
                      class="
                        fas
                        fa-th
                        display-29 display-md-28 display-xl-27
                        vertical-align-middle
                      "
                    ></i>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    v-if="next"
                    :to="{
                      name: 'portfolio-slug',
                      params: { slug: next.slug },
                    }"
                    rel="next"
                  >
                    <span class="mr-3 display-30 display-md-29 font-weight-600"
                      >Volgende</span
                    >
                    <i class="fas fa-angle-right display-30 display-md-29"></i>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SlickSlideshow from "@/components/SlickSlideshow";
export default {
  async asyncData({ $content, params }) {
    const service = await $content("services", params.slug).fetch();
    const [prev, next] = await $content("services")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    let relatedservices = [];
    if (service.relatedservices) {
      relatedservices = await $content("services")
        .only(["slug", "title", "description", "image"])
        .where({ slug: { $in: service.relatedservices } })
        .fetch();
    }
    return { service, relatedservices, prev, next };
  },
  components: {
    SlickSlideshow,
    Relatedservices,
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("nl", options);
    },
  },
  computed: {
    backgroundImage() {
      return this.service.backgroundImage || "/img/bg/bg-01.jpg";
    },
    carouselImages() {
      const x = { a: 1, b: 2 };
      const y = { ...x, c: 3 };
      return this.service.images
        .filter((a) => a.showInCarousel)
        .map((img, index) => {
          return { ...img, id: index };
        });
    },
  },
};
</script>

<style scoped>
.single-service-carousel img {
  width: 100%;
  height: 100%;
}
.nuxt-content h1 {
  font-size: 1.75rem;
}
.nuxt-content p {
  margin-bottom: 20px;
}

.slick-slide img {
  height: 550px;
  width: 1140px;
}
/* .icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
} */
</style>