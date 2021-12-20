<template>
  <div class="row number-ordered gallery">
    <div class="col-xl-3 col-md-6 mb-1-6" v-for="service in services" :key="service.slug">
      <div class="service-wrapper">
        <div class="mb-1-6">
          <i :class="getIconClass(service)"></i>
        </div>
        <h3 class="h5 mb-3">
          <a href="#!">{{ service.title }}</a>
        </h3>
        <p>{{ service.description }}</p>
        <div class="service-counter number-ordered-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { services: [] }
  },
  async created() {
    this.services = await this.$content("services").only(["slug", "title", "description", "icon"]).sortBy("sequenceNumber").fetch()
  },
  methods: {
    getIconClass(service) {
      const icon = service.icon ? service.icon : "ti-check-box"
      return `${icon} display-14 text-primary`
    },
  },
}
</script>

<style>
</style>