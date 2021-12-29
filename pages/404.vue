<template>
  <section class="full-screen cover-background p-0 bg-img" data-overlay-dark="6" data-background="img/bg/bg-02.jpg">
    <div class="container d-flex flex-column">
      <div class="row align-items-center justify-content-center min-vh-100">
        <div class="col-sm-11 col-md-10 col-lg-9 col-xl-7">
          <div class="my-5 text-center error-wrapper">
            <div class="text-center mb-1-9 mb-md-2-5">
              <h2 class="h1 text-white mb-4">{{$t("notfound.title")}}</h2>
              <p class="lead text-white mb-1-6 mb-lg-2-9">{{$t("notfound.description")}}</p>
              <div class="text-center mb-1-9 mb-md-2-5">
                <nuxt-link to="/contact" class="butn"><span>{{$t("contact.title")}}</span></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>