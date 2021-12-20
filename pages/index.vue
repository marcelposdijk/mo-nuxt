<template>
  <div>
    <!-- start slideshow section -->
    <div class="container-fluid full-screen top-position">
      <div class="row slider-fade1">
        <div class="owl-carousel owl-theme w-100">
          <home-page-slide background-image="/img/banner/slide1.jpg" inset-image="/img/banner/slide-img-01.jpg" slide-number="01" title="Schilderwerk binnen" subTitle="Voor al uw klussen in en om het huis!" />
          <home-page-slide background-image="/img/banner/slide2.jpg" inset-image="/img/banner/slide-img-02.jpg" slide-number="02" title="Behangklussen" subTitle="Voor al uw klussen in en om het huis!" />
          <home-page-slide background-image="/img/banner/slide3.jpg" inset-image="/img/banner/slide-img-03.jpg" slide-number="03" title="Klussen in de tuin" subTitle="Voor al uw klussen in en om het huis!" />
          <home-page-slide background-image="/img/banner/slide4.jpg" inset-image="/img/banner/slide-img-04.jpg" slide-number="04" title="Timmerwerk" subTitle="Voor al uw klussen in en om het huis!" />
          <home-page-slide background-image="/img/banner/slide5.jpg" inset-image="/img/banner/slide-img-05.jpg" slide-number="05" title="Schilderwerk buiten" subTitle="Voor al uw klussen in en om het huis!" />
        </div>
      </div>
    </div>
    <!-- end slideshow section -->

    <!-- start about us section -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-6 mb-lg-0">
            <h3 class="text-primary text-uppercase h6 mb-2">Al jaren kluservaring</h3>
            <h2 class="display-18 display-md-16 display-lg-14 mb-1-6">Betrouwbare Klusvrouw/Schilder</h2>
            <p class="display-29 display-md-28 mb-6">
              In overleg met de klant wordt er gekeken wat de wensen zijn. Van interieuradvies tot uitvoering wordt besproken en in overleg uitgevoerd. Schilderen, behangen, klussen in de tuin, timmerwerk, ophangen, bevestigen en
            </p>
          </div>
          <div class="col-lg-6">
            <div class="pl-lg-6 pl-xl-12 dots-image">
              <div class="position-relative bg-img text-center py-10 py-sm-14 py-md-16 py-lg-20 rounded theme-overlay-dark z-index-9" data-overlay-dark="2" data-background="/img/content/about-01.jpg">
                <div class="position-relative z-index-1 py-6">
                  <a class="popup-social-video video_btn" href="https://www.youtube.com/watch?v=x7gqoHNgO-g">
                    <span>
                      <i class="fas fa-play"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div class="dots"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end about us section -->

    <!-- start service section -->
    <section class="pb-0">
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">Diensten die wij leveren</h2>
          <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">Voor al uw klussen in en om het huis!</p>
        </div>
        <services />
      </div>
    </section>
    <!-- end service section -->

    <!-- start latest project section -->
    <section class="pb-0">
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">De laatste projecten</h2>
          <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">Voor al uw klussen in en om het huis!</p>
        </div>
        <latest-projects-carousel />
      </div>
    </section>
    <!-- end latest project section -->

    <!-- start process section -->
    <section class="pb-0">
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">Mijn werk proces</h2>
          <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">Voor al uw klussen in en om het huis!</p>
        </div>
        <div class="row process-order">
          <div class="col-lg-4 mb-1-9 mb-md-2-5 mb-lg-0">
            <div class="process-wrapper process-down-arrow">
              <div class="icon-box">
                <i class="ti-blackboard"></i>
              </div>
              <div class="process-content">
                <h4 class="h5 mb-3">Eerste contact via mobiel, mail of whatsapp</h4>
                <p class="mb-0 w-95 mx-auto">Netjes, kundig en betrouwbaar</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-1-9 mb-md-2-5 mb-lg-0">
            <div class="process-wrapper process-up-arrow">
              <div class="icon-box">
                <i class="ti-write"></i>
              </div>
              <div class="process-content">
                <h4 class="h5 mb-3">Wensen en planning</h4>
                <p class="mb-0 w-95 mx-auto">Netjes, kundig en betrouwbaar</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="process-wrapper">
              <div class="icon-box">
                <i class="ti-home"></i>
              </div>
              <div class="process-content">
                <h4 class="h5 mb-3">Uitvoering</h4>
                <p class="mb-0 w-95 mx-auto">Netjes, kundig en betrouwbaar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end process section -->

    <section class="pb-0">
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">Mijn team</h2>
          <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">Voor al uw klussen in en om het huis!</p>
        </div>
        <team />
      </div>
    </section>

    <!-- start testimonial section -->
    <section style="display: none" class="pb-0">
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">Reviews</h2>
          <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">Voor al uw klussen in en om het huis!</p>
        </div>
        <div class="testimonial-carousel owl-carousel owl-theme">
          <div class="testimonial-wrapper">
            <div class="testimonial-content">
              <div class="testimonial-image">
                <img src="/img/testimonials/testimonial-01.jpg" alt="..." class="rounded" />
              </div>
              <div class="testimonial-body">
                <div class="quote-text">
                  <h4 class="mb-1-9">Interior design is awesome!</h4>
                </div>
                <p class="mb-1-9">I would like to personally thank you for your outstanding product. It's the perfect solution for our business. You won't regret it. Great job, I will definitely be ordering again! You guys rock!</p>
                <div class="media">
                  <img class="mr-3 rounded-circle" src="/img/avatar/avatar-03.jpg" alt="..." />
                  <div class="media-body align-self-center">
                    <h5 class="h6 mb-0">Edward Wellman</h5>
                    <p class="mb-0 small">Events Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-wrapper">
            <div class="testimonial-content">
              <div class="testimonial-image">
                <img src="/img/testimonials/testimonial-02.jpg" alt="..." class="rounded" />
              </div>
              <div class="testimonial-body">
                <div class="quote-text">
                  <h4 class="mb-1-9">The best services ever for me!</h4>
                </div>
                <p class="mb-1-9">I just can't get enough of interior design. I want to get a T-Shirt with interior design on it so I can show it off to everyone. Interior design is awesome! I can't say enough about interior design.</p>
                <div class="media">
                  <img class="mr-3 rounded-circle" src="/img/avatar/avatar-04.jpg" alt="..." />
                  <div class="media-body align-self-center">
                    <h5 class="h6 mb-0">Willard Robertson</h5>
                    <p class="mb-0 small">Utilities Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-wrapper">
            <div class="testimonial-content">
              <div class="testimonial-image">
                <img src="/img/testimonials/testimonial-03.jpg" alt="..." class="rounded" />
              </div>
              <div class="testimonial-body">
                <div class="quote-text">
                  <h4 class="mb-1-9">Keep up the excellent work!</h4>
                </div>
                <p class="mb-1-9">Architecture design has got everything I need. I will let my mum know about this, she could really make use of interior design! Interior design is worth much more than I paid.</p>
                <div class="media">
                  <img class="mr-3 rounded-circle" src="/img/avatar/avatar-05.jpg" alt="..." />
                  <div class="media-body align-self-center">
                    <h5 class="h6 mb-0">Jason Godfrey</h5>
                    <p class="mb-0 small">Ethnologist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-wrapper">
            <div class="testimonial-content">
              <div class="testimonial-image">
                <img src="/img/testimonials/testimonial-04.jpg" alt="..." class="rounded" />
              </div>
              <div class="testimonial-body">
                <div class="quote-text">
                  <h4 class="mb-1-9">Pleasant and all hassle free!</h4>
                </div>
                <p class="mb-1-9">I could probably go into sales for you. I STRONGLY recommend interior design to EVERYONE interested in running a successful online business!. I will recommend!</p>
                <div class="media align-items-center">
                  <img class="mr-3 rounded-circle" src="/img/avatar/avatar-06.jpg" alt="..." />
                  <div class="media-body">
                    <h5 class="h6 mb-0">Lillian Thomas</h5>
                    <p class="mb-0 small">Infantry Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end testimonial section -->
  </div>
</template>

<script>
import HomePageSlide from "@/components/HomePageSlide"
import Services from "@/components/Services.vue"
import Team from "@/components/Team"
import LatestProjectsCarousel from "@/components/LatestProjectsCarousel"
export default {
  components: {
    HomePageSlide,
    Services,
    Team,
    LatestProjectsCarousel
  },
  mounted() {
    setTimeout(() => {
      // Sliderfade
      $(".slider-fade1 .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
        margin: 0,
        autoplay: true,
        smartSpeed: 900,
        mouseDrag: false,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        responsive: {
          768: {
            nav: false,
          },
          992: {
            nav: true,
          },
        },
      })

      // Slider text animation
      const owl = $(".slider-fade1")
      owl.on("changed.owl.carousel", function (event) {
        var item = event.item.index - 2 // Position of the current item
        $(".number").removeClass("animated fadeInUp")
        $("h3").removeClass("animated fadeInUp")
        $("h1").removeClass("animated fadeInUp")
        $("p").removeClass("animated fadeInUp")
        $(".butn").removeClass("animated fadeInUp")
        $(".slider-pic").removeClass("animated fadeInRight")
        $(".owl-item").not(".cloned").eq(item).find(".number").addClass("animated fadeInUp")
        $(".owl-item").not(".cloned").eq(item).find("h3").addClass("animated fadeInUp")
        $(".owl-item").not(".cloned").eq(item).find("h1").addClass("animated fadeInUp")
        $(".owl-item").not(".cloned").eq(item).find("p").addClass("animated fadeInUp")
        $(".owl-item").not(".cloned").eq(item).find(".butn").addClass("animated fadeInUp")
        $(".owl-item").not(".cloned").eq(item).find(".slider-pic").addClass("animated fadeInRight")
      })
    }, 100)
  },
}
</script>
