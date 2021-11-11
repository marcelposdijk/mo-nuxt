<template>
  <div>
    <page-title :title="project.title" :backgroundImage="backGroundImage" />
    <section class="p-1-6">
      <div class="container">
        <div class="mb-2-9" v-if="project.images">
          <div class="single-project-carousel">
            <slideshow
              :starting-image="1"
              :images="project.images"
              :auto-slide-interval="5000"
              :show-progress-bar="false"
            ></slideshow>
          </div>
        </div>
        <div class="row mb-2-6">
          <div class="col-lg-7 mb-2-6 mb-lg-0">
            <article>
              <nuxt-content :document="project" />
            </article>
          </div>
          <div class="col-lg-4 offset-lg-1">
            <h3 class="mb-1-6">Project Informatie</h3>
            <div class="project-info-content">
              <ul>
                <li v-if="project.location">
                  <div class="media">
                    <i class="ti-location-pin align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">Locatie</h4>
                      <p class="mb-0 mt-n2">{{ project.location }}</p>
                    </div>
                  </div>
                </li>
                <li v-if="project.m2">
                  <div class="media">
                    <i class="ti-ruler-pencil align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">Vierkante Meters</h4>
                      <p class="mb-0 mt-n2">
                        {{ project.m2 }} m<sup class="letter-spacing-1">2</sup>
                      </p>
                    </div>
                  </div>
                </li>
                <li v-if="project.year">
                  <div class="media">
                    <i class="ti-calendar align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">Project Jaar</h4>
                      <p class="mb-0 mt-n2">{{ project.year }}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media">
                    <i class="ti-user align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">Hoofd van het Project</h4>
                      <p class="mb-0 mt-n2">
                        {{
                          project.lead
                            ? project.lead
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
      </div>
    </section>
    <ul v-if="relatedProjects">
      <h3>Gerelateerde projecten</h3>
      <li v-for="rp in relatedProjects" :key="rp.slug">
          {{rp.title}} => {{rp.description}}
      </li>
    </ul>
  </div>
</template>

<script>
import Slideshow from "@/components/Slideshow";
export default {
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();
    let relatedProjects = []
    if (project.relatedProjects) {
      relatedProjects = await $content('projects').only(["slug", "title", "description"]).where({ slug: { $in: project.relatedProjects } }).fetch()
    }
    return { project, relatedProjects }
  },
  components: {
    Slideshow,
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("nl", options);
    },
  },
  computed: {
    backGroundImage() {
      return this.project.img || "/img/bg/bg-02.jpg";
    },
  },
};
</script>

<style>
.single-project-carousel img {
  width: 100%;
  height: 100%;
}
.nuxt-content h1 {
  font-size: 1.75rem;
}
.nuxt-content p {
  margin-bottom: 20px;
}

/* .icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
} */
</style>