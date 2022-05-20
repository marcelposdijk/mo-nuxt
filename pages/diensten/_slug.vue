<template>
  <div>
    <page-title :backgroundImage="backgroundImage" />
    <section class="mt-1-6" style="padding: 0">
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">{{service.title}}</h2>
          <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">{{service.description}}</p>
        </div>
        <div class="row mb-2-6">
          <div class="col-12">
            <article>
              <nuxt-content :document="service" />
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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

</style>