<template>
  <div>
    <page-title :title="project.title" :backgroundImage="backgroundImage" />
    <section class="mt-1-6" style="padding: 0">
      <div class="container">
        <div class="mb-2-9" v-if="project.images">
          <slick-slideshow ref="carousel" :images="carouselImages"></slick-slideshow>
        </div>
        <div class="row mb-2-6">
          <div class="col-lg-7 mb-2-6 mb-lg-0">
            <article>
              <nuxt-content :document="project" />
            </article>
          </div>
          <div class="col-lg-4 offset-lg-1">
            <h3 class="mb-1-6">{{$t('projecten.Projectinformatie')}}</h3>
            <div class="project-info-content">
              <ul>
                <li v-if="project.location">
                  <div class="media">
                    <i class="ti-location-pin align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">{{$t('projecten.Locatie')}}</h4>
                      <p class="mb-0 mt-n2">{{ project.location }}</p>
                    </div>
                  </div>
                </li>
                <li v-if="project.m2">
                  <div class="media">
                    <i class="ti-ruler-pencil align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">{{$t('projecten.Vierkantemeters')}}</h4>
                      <p class="mb-0 mt-n2">{{ project.m2 }} m<sup class="letter-spacing-1">2</sup></p>
                    </div>
                  </div>
                </li>
                <li v-if="project.year">
                  <div class="media">
                    <i class="ti-calendar align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">{{$t('projecten.Projectjaar')}}</h4>
                      <p class="mb-0 mt-n2">{{ project.year }}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media">
                    <i class="ti-user align-middle mr-3 display-24"></i>
                    <div class="media-body">
                      <h4 class="h6 mb-3">{{$t('projecten.Projectleider')}}</h4>
                      <p class="mb-0 mt-n2">
                        {{ project.lead ? project.lead : "Monique van den Nouweland" }}
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
            <div class="portfolio-navigation-wrap border-top border-bottom border-color-extra-light-gray">
              <ul class="portfolio-navigation">
                <li>
                  <NuxtLink
                    v-if="prev"
                    :to="localePath(`/projecten/${prev.slug}`)"
                    rel="prev">
                    <i class="fas fa-angle-left display-30 display-md-29"></i>
                    <span class="ml-3 display-30 display-md-29 font-weight-600">{{ $t('vorige') }}</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/portfolio/">
                    <i class="fas fa-th display-29 display-md-28 display-xl-27 vertical-align-middle"></i>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    v-if="next"
                    :to="localePath(`/projecten/${next.slug}/`)"
                    rel="next">
                    <span class="mr-3 display-30 display-md-29 font-weight-600">{{ $t('volgende') }}</span>
                    <i class="fas fa-angle-right display-30 display-md-29"></i>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row" v-if="relatedProjects.length > 0">
          <div class="col-lg-12">
            <div class="project-gallery w-100">
              <h3 class="mb-1-6">Soortgelijke projecten</h3>
              <projects-carousel ref="relatedCarousel" :projects="relatedProjects" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SlickSlideshow from "@/components/SlickSlideshow"
import ProjectsCarousel from "@/components/ProjectsCarousel"
export default {
  async asyncData({ $content, app, params }) {
    const project = await $content(app.i18n.locale, "projects", params.slug).fetch()
    const [prev, next] = await $content(app.i18n.locale, "projects").only(["title", "slug"]).sortBy("sequenceNumber", "asc").surround(params.slug).fetch()
    let relatedProjects = []
    if (project.relatedProjects) {
      relatedProjects = await $content(app.i18n.locale, "projects")
        .only(["slug", "title", "description", "image"])
        .where({ slug: { $in: project.relatedProjects } })
        .fetch()
    }
    return { project, relatedProjects, prev, next }
  },
  components: {
    SlickSlideshow,
    ProjectsCarousel,
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("nl", options)
    },
  },
  computed: {
    backgroundImage() {
      return this.project.backgroundImage || "/img/bg/bg-01.jpg"
    },
    carouselImages() {
      const x = { a: 1, b: 2 }
      const y = { ...x, c: 3 }
      return this.project.images
        .filter((a) => a.showInCarousel)
        .map((img, index) => {
          return { ...img, id: index }
        })
    },
  },
  head() {
    return {
      title: `${this.project.title}${this.$t("titleExtension")}`,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.project.title },
        { property: "og:image", content: this.project.image },
        { property: "og:description", content: this.project.description },
        { hid: 'description', name: 'description', content: this.project.description },
      ],
    }
  },
}
</script>

<style scoped>
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
