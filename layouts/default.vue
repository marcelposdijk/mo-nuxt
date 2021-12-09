<template>
  <div>
    <loading />
    <div class="main-wrapper">
      <!-- start header section -->
      <header class="header-style1 menu_area-light">
        <div class="navbar-default">
          <!-- start top search -->
          <div class="top-search bg-primary">
            <div class="container">
              <form class="search-form" action="search.html" method="GET" accept-charset="utf-8">
                <div class="input-group">
                  <span class="input-group-addon cursor-pointer">
                    <button class="search-form_submit fas fa-search text-white" type="submit"></button>
                  </span>
                  <input type="text" class="search-form_input form-control" name="s" autocomplete="off" placeholder="Type & hit enter..." />
                  <span class="input-group-addon close-search mt-1"><i class="fas fa-times"></i></span>
                </div>
              </form>
            </div>
          </div>
          <!-- end top search -->
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-lg-12">
                <div class="menu_area alt-font">
                  <nav class="navbar navbar-expand-lg navbar-light p-0">
                    <div class="navbar-header navbar-header-custom">
                      <!-- start logo -->
                      <a href="/" class="navbar-brand"><img id="logo" src="/img/logos/logo-inner.png" alt="logo" /></a>
                      <!-- end logo -->
                    </div>

                    <div class="navbar-toggler"></div>

                    <!-- menu area -->
                    <ul class="navbar-nav ml-auto" id="nav">
                      <li><NuxtLink to="/">Home</NuxtLink></li>
                      <li>
                        <a href="#!">Over ons</a>
                        <ul>
                          <li><NuxtLink to="/diensten">Diensten</NuxtLink></li>
                          <li><NuxtLink to="/team">Ons team</NuxtLink></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#!">Portfolio</a>
                        <ul>
                          <li>
                            <a href="/portfolio">Overzicht</a>
                          </li>
                          <li v-for="project in projects" :key="project.slug">
                            <nuxt-link :to="project.slug">{{ project.title }}</nuxt-link>
                          </li>
                        </ul>
                      </li>
                      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    </ul>
                    <!-- end menu area -->
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <Nuxt />
    <footer class="pt-6 pt-md-8 pt-lg-9">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-2-5 mb-lg-0">
            <div class="mb-1-6">
              <img src="/img/logos/logo-footer.png" alt="..." />
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-2-5 mb-lg-0">
            <div class="pl-lg-2">
              <h3 class="footer-title h5">Contact</h3>
              <ul class="contact-list">
                <li>
                  <h6>Adres</h6>
                  <p>Christinastraat 17, 1432 HN AALSMEER</p>
                </li>
                <li>
                  <h6>Telefoon</h6>
                  <p>
                    06-14968712<br />
                    <span>Maandag t/m vrijdag: </span><br />8:00 tot 16:00 uur
                  </p>
                </li>
                <li>
                  <h6>E-mail</h6>
                  <p>info@klusvrouwmonique.nl<br /></p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-2-5 mb-md-0">
            <div class="pl-lg-3">
              <h3 class="footer-title h5">Laatste projecten</h3>

              <div class="media mb-1-6" v-for="project in latestProjects" :key="project.slug">
                <div class="media-body align-self-center">
                  <h4 class="h6">
                    <nuxt-link :to="project.slug" class="text-white">{{ project.title }}</nuxt-link>
                  </h4>
                  <span class="display-30 text-white">{{ formatDate(project.createdAt) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bar bg-primary mt-6 mt-md-8 mt-lg-9">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 mb-2 mb-md-0 text-left">
              <p class="display-31 display-lg-30 mb-0 text-black">&copy; 2021 Mo & Mars</p>
            </div>
            <div class="col-md-6 text-md-right">
              <p class="text-black d-inline-block font-weight-600 mr-2 mb-0">We are on:</p>
              <ul class="share-post">
                <li>
                  <a href="#!" class="white-hover"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#!" class="white-hover"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#!" class="white-hover"><i class="fab fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Loading from "../components/Loading"
export default {
  data() {
    return {
      latestProjects: [
        { title: "Project Mo", createdAt: "Juli 2021", slug: "/portfolio/projectmo" },
        { title: "Project Jen", createdAt: "Mei 2021", slug: "/portfolio/projectjen" },
        { title: "Project Mars", createdAt: "Maart 2021", slug: "/portfolio/projectmars" },
      ],
      projects: [],
    }
  },
  components: {
    Loading,
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("nl", options)
    },
  },
  async created() {
    this.latestProjects = await this.$content("projects").only(["slug", "title", "createdAt"]).sortBy("createdAt", "desc").limit(3).fetch()

    this.projects = await this.$content("projects").only(["slug", "title"]).where({ showInMenu: true }).sortBy("sequenceNumber", "desc").limit(10).fetch()
  },
}
</script>

