<template>
  <div>
    <loading />
    <div class="main-wrapper">
      <fixed-header :threshold="50">
        <header class="header-style1 menu_area-light">
          <div class="navbar-default">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-12 col-lg-12">
                  <div class="menu_area alt-font">
                    <nav class="navbar navbar-expand-lg navbar-light p-0">
                      <div class="navbar-header navbar-header-custom">
                        <a href="/" class="navbar-brand"><img id="logo" width="41" height="43" src="/img/logos/logo-inner.png" alt="Logo Klusvrouw Monique" /></a>
                      </div>

                      <div class="navbar-toggler" @click="toggleMenu" v-bind:class="{ 'menu-opened': menuOpened }"></div>

                      <!-- menu area -->
                      <ul class="navbar-nav ml-auto" id="nav" v-bind:style="{ display: menuOpened ? 'block' : 'none' }" v-bind:class="{ open: menuOpened }">
                        <li><nuxt-link @click.native="menuClick" title="Home" to="/">Home</nuxt-link></li>
                        <li><nuxt-link @click.native="menuClick" title="Mijn team" to="/mijnteam/">Mijn team</nuxt-link></li>
                        <li><nuxt-link @click.native="menuClick" title="Diensten" to="/diensten/">Diensten</nuxt-link></li>
                        <li><nuxt-link @click.native="menuClick" title="Portfolio" to="/portfolio/">Portfolio</nuxt-link></li>
                        <li class="has-sub" v-bind:class="{ active: submenuOpened }">
                          <span class="submenu-button"  @click="toggleSubMenu"></span>
                          <a href="#" @click="toggleSubMenu">Projecten</a>
                          <ul class="sub-menu animated" v-bind:style="{ display: submenuOpened ? 'block' : 'none' }">
                            <li v-for="project in projects" :key="project.slug">
                              <nuxt-link @click.native="menuClick" :title="project.title" :to="`/projecten/${project.slug}/`">{{ project.title }}</nuxt-link>
                            </li>
                          </ul>
                        </li>
                        <li><nuxt-link @click.native="menuClick" to="/contact/" title="Contact">Contact</nuxt-link></li>
                      </ul>
                      <!-- end menu area -->
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </fixed-header>
    </div>
    <Nuxt />
    <footer class="pt-6 pt-md-8 pt-lg-9">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-2-5 mb-lg-0">
            <div class="mb-1-6">
              <img src="/img/logos/logo-footer.png" width="255" height="267" alt="Logo Klusvrouw Monique" />
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
                <li v-if="false">
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
                    <nuxt-link :to="`/projecten/${project.slug}/`" :title="project.title" class="text-white">{{ project.title }}</nuxt-link>
                  </h4>
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
              <p class="display-31 display-lg-30 mb-0 text-black">&copy; 2021-2022 Mo & Mars</p>
            </div>
            <div class="col-md-6 text-md-right">
              <p class="text-black d-inline-block font-weight-600 mr-2 mb-0">Bezoek ons op:</p>
              <ul class="share-post">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100076447965172" target="_blank" class="white-hover"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/klusvrouwmonique/" target="_blank" class="white-hover"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/monique-van-den-nouweland-19b27734/" target="_blank" class="white-hover"><i class="fab fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <transition name="fade">
      <a class="scroll-to-top" v-show="scY > 300" @click="toTop"><i class="fas fa-angle-up"></i></a>
    </transition>
  </div>
</template>
<script>
import Loading from "../components/Loading"
import FixedHeader from "vue-fixed-header"

export default {
  data() {
    return {
      latestProjects: [],
      projects: [],
      scTimer: 0,
      scY: 0,
      menuOpened: false,
      submenuOpened: false,
      isMobile: false
    }
  },
  components: {
    Loading,
    FixedHeader,
  },
  async created() {
    this.latestProjects = await this.$content("projects").only(["slug", "title", "createdAt"]).sortBy("createdAt", "desc").limit(3).fetch()

    this.projects = await this.$content("projects").only(["slug", "title"]).where({ showInMenu: true }).sortBy("sequenceNumber", "desc").limit(10).fetch()
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll, {passive: true})

    this.isMobile = window.innerWidth <= 991
    this.menuOpened = !this.isMobile
  },
  methods: {
    menuClick() {
      if (this.isMobile) {
        this.menuOpened = false
        console.log("Close menu for mobile")
      }
    },
    handleScroll() {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    },
    toggleMenu() {
      this.menuOpened = !this.menuOpened
      if (!this.menuOpened) {
        this.submenuOpened = false
      }
    },
    toggleSubMenu() {
      // TODO werkend maken indien meer dan 1 submenu
      this.submenuOpened = !this.submenuOpened
    },
  },
}
</script>

