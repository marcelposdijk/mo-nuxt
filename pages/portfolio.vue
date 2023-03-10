<template>
  <div>
    <page-title title="Portfolio" backgroundImage="/img/bg/bg-01.jpg" />
    <section>
      <div class="container">
        <div class="row no-gutters">
          <div class="filtering col-sm-12 text-center">
            <span data-filter="*" class="active">Alle</span>
            <span data-filter=".timmerwerk-en-montage">Timmerwerk</span>
            <span data-filter=".behangen">Behangen</span>
            <span data-filter=".schilderwerk">Schilderwerk</span>
          </div>
          <div class="col-12 text-center w-100">
            <div class="form-row gallery">
              <div v-for="item in portfolio.images" :key="item.image" :class="`col-sm-6 col-lg-4 mb-2 ${getImageServiceSlugs(item)}`">
                <div class="portfolio-wrapper">
                  <div class="portfolio-image">
                    <img :src="item.thumbnail"  :alt="item.title" />
                  </div>
                  <div class="portfolio-overlay">
                    <div class="portfolio-content">
                      <a class="popimg ml-0" :href="item.image">
                        <i class="ti-zoom-in display-24 display-md-23 display-lg-22 display-xl-20"></i>
                      </a>
                      <h4 v-if="!item.project">{{ item.title }}</h4>
                      <h4 v-if="item.project">
                        <nuxt-link :to="localePath(`/projecten/${item.project}/`)">{{ item.title }}</nuxt-link>
                      </h4>
                      <p>[{{ getImageServiceTitles(item) }}]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, app }) {
    const portfolio = await $content(app.i18n.locale,"portfolio-overview").fetch()
    const services = await $content(app.i18n.locale, "services").only(["slug", "title", "shortTitle"]).fetch()
    return { portfolio, services }
  },
  components: {},
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("nl", options)
    },
    getServiceTitle(slug) {
      const service = this.services.find((a) => a.slug == slug)
      return service ? service.shortTitle || service.title : slug
    },
    getImageServiceSlugs(image) {
      if (!image.services) {
        return ""
      }
      return image.services.join(" ")
    },
    getImageServiceTitles(image) {
      if (!image.services) {
        return ""
      }
      const titles = image.services.map((a) => this.getServiceTitle(a))
      return titles.join(", ")
    },
  },
  computed: {},
  mounted() {
    setTimeout(() => {
      window.$gallery = $(".gallery").isotope({})
      $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

    }, 500)

    // filter items on button click
    $(".filtering").on("click", "span", function () {
      var filterValue = $(this).attr("data-filter")
      window.$gallery.isotope({
        filter: filterValue,
      })
    })

    $(".filtering").on("click", "span", function () {
      $(this).addClass("active").siblings().removeClass("active")
    })
  },
  head() {
    return {
      title: `${this.$t('portfolio.title')}${this.$t('titleExtension')}`,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.$t('portfolio.title') },
        { property: "og:image", content: '/img/portfolio/grid-portfolio-03-autox400px.jpg' },
        { property: "og:description", content: this.$t('portfolio.description') },
        { hid: 'description', name: 'description', content: this.$t('portfolio.description') },
      ],
    }
  },
}
</script>

<style scoped>
h4 > a:hover {
  color: blue;
}
</style>
