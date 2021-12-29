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
          <div class="col-lg-12">
            <h3 class="text-primary text-uppercase h6 mb-2">Al jaren kluservaring</h3>
            <h2 class="display-18 display-md-16 display-lg-14 mb-1-6">Betrouwbare Klusvrouw/Schilder</h2>
            <p class="display-29 display-md-28 mb-6">
               Hallo, ik ben Klusvrouw Monique. Wat leuk dat je mijn website bezoekt. Na 26,5 jaar werkzaam te zijn geweest in de financiële wereld, heb ik mij om laten scholen tot klusvrouw. Mijn passie is creatief bezig zijn, iets moois maken. Ik heb mijn hele leven al thuis geklust, bij familie en vrienden. In overleg met de klant wordt er gekeken wat de wensen zijn. Er kan een interieuradvies worden gedaan en dit kan uitgevoerd worden. Alles wordt besproken en gaat in overleg. Hieronder tref je de diensten aan die ik lever.  
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- end about us section -->

    <!-- start service section -->
    <section class="pb-0">
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">Diensten die ik aanbied</h2>
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
