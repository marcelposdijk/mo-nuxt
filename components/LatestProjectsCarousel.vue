<template>
  <div>
    <projects-carousel v-if="latestProjects.length > 0" ref="latestProjectsCarousel" :projects="latestProjects" />
  </div>
</template>

<script>
import ProjectsCarousel from "@/components/ProjectsCarousel"
export default {
  components: {
    ProjectsCarousel,
  },
  data() {
    return {
      latestProjects: [],
    }
  },
  async created() {
    const projects = await this.$content("projects").only(["slug", "title", "image", "description", "createdAt"]).sortBy("createdAt", "desc").limit(9).fetch()
    this.latestProjects = projects
  },
}
</script>

<style>
</style>