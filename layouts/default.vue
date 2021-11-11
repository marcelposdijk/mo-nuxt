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
              <form
                class="search-form"
                action="search.html"
                method="GET"
                accept-charset="utf-8"
              >
                <div class="input-group">
                  <span class="input-group-addon cursor-pointer">
                    <button
                      class="search-form_submit fas fa-search text-white"
                      type="submit"
                    ></button>
                  </span>
                  <input
                    type="text"
                    class="search-form_input form-control"
                    name="s"
                    autocomplete="off"
                    placeholder="Type & hit enter..."
                  />
                  <span class="input-group-addon close-search mt-1"
                    ><i class="fas fa-times"></i
                  ></span>
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
                      <a href="/" class="navbar-brand"
                        ><img
                          id="logo"
                          src="/img/logos/logo-inner.png"
                          alt="logo"
                      /></a>
                      <!-- end logo -->
                    </div>

                    <div class="navbar-toggler"></div>

                    <!-- menu area -->
                    <ul class="navbar-nav ml-auto" id="nav">
                      <li><NuxtLink to="/">Home</NuxtLink></li>
                      <li>
                        <a href="#!">Pagina's</a>
                        <ul>
                          <li><NuxtLink to="/about">Over ons</NuxtLink></li>
                          <li><a href="services.html">Diensten</a></li>
                          <li>
                            <a href="#!">Enkele diensten</a>
                            <ul>
                              <li>
                                <a href="interior-design.html"
                                  >Schilderwerk binnen en buiten</a
                                >
                              </li>
                              <li>
                                <a href="concept-designs.html">Behangen</a>
                              </li>
                              <li>
                                <a href="consultations.html"
                                  >Klussen in de tuin</a
                                >
                              </li>
                              <li>
                                <a href="space-planning.html">Timmerklussen</a>
                              </li>
                              <li>
                                <a href="decorative-services.html"
                                  >Interieuradvies</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li><a href="our-team.html">Ons team</a></li>
                          <li><a href="testimonials.html">Reviews</a></li>
                          <li><a href="pricing.html">Prijzen</a></li>
                          <li><a href="faq.html">Vraag en antwoordt</a></li>
                          <li>
                            <a href="#!">Overig</a>
                            <ul>
                              <li><a href="comingsoon.html">Binnenkort </a></li>
                              <li><a href="503-page.html">503 Page</a></li>
                              <li><a href="404-page.html">404 Page</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#!">Portfolio</a>
                        <ul>
                          <li>
                            <a href="grid-portfolio.html">Grid Portfolio</a>
                          </li>
                          <li>
                            <a href="full-width-portfolio.html"
                              >Full Width Portfolio</a
                            >
                          </li>
                          <li>
                            <a href="masonry-portfolio.html"
                              >Masonry Portfolio</a
                            >
                          </li>
                          <li>
                            <a href="full-width-masonry-portfolio.html"
                              >Full Width Masonry</a
                            >
                          </li>
                          <li>
                            <NuxtLink to="/portfolio/sconedorp"
                              >Project Sconedorp</NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink to="/portfolio/sieboldlaan"
                              >Project Sieboldlaan</NuxtLink
                            >
                          </li>

                          <li>
                            <NuxtLink to="/portfolio/christinastraat"
                              >Project Christinastraat</NuxtLink
                            >
                          </li>

                          <li>
                            <a href="single-project-2.html"
                              >Project Sieboldlaan</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    </ul>
                    <!-- end menu area -->

                    <!-- start attribute navigation -->
                    <div class="attr-nav">
                      <ul>
                        <li class="search">
                          <a href="#!"><i class="fas fa-search"></i></a>
                        </li>
                      </ul>
                    </div>
                    <!-- end attribute navigation -->
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <Nuxt />
  </div>
</template>
<script>
import Loading from "../components/Loading";
export default {
  components: {
    Loading,
  },
};
</script>

