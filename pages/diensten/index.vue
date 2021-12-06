<template>
  <div>
    <page-title title="Diensten" backgroundImage="/img/bg/bg-01.jpg" />
    <section>
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">Diensten die we leveren</h2>
          <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">Consectetur adipiscing amet lorem ipsum dolor sit elit sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        </div>
        <div class="row number-ordered">
          <div class="col-xl-3 col-md-6 mb-1-6" v-for="service in services" :key="service.slug">
            <div class="service-wrapper">
              <div class="mb-1-6">
                <i :class="getIconClass(service)"></i>
              </div>
              <h3 class="h5 mb-3">
                <a href="#!">{{ service.title }}</a>
              </h3>
              <p>{{ service.description }}</p>
              <NuxtLink :to="`/diensten/${service.slug}`" class="read-more">Lees meer<i class="fas fa-long-arrow-alt-right align-middle ml-2"></i></NuxtLink>
              <div class="service-counter number-ordered-item"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const services = await $content("services").only(["slug", "title", "description", "icon"]).sortBy("sequenceNumber").fetch()

    return { services }
  },
  methods: {
    getIconClass(service) {
      const icon = service.icon ? service.icon : "ti-check-box"
      return `${icon} display-14 text-primary`
    },
  },
}
</script>
