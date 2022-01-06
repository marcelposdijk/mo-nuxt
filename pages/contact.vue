<template>
  <div>
    <page-title title="Contact" backgroundImage="/img/bg/bg-01.jpg" />

    <section>
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">Zo kom je met mij in contact</h2>
          <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">Voor al uw klussen in en om het huis!</p>
        </div>

        <div class="row mb-2-9">
          <div class="col-lg-4 col-md-12 mb-1-9 mb-lg-0">
            <div class="contact-box">
              <i class="fas fa-mobile-alt text-primary mb-1-6 display-md-19 display-lg-17 display-xl-14"></i>
              <h4 class="h5 mb-3">Telefoon</h4>
              <ul class="list-unstyled mb-0">
                <li><a href="tel:31614968712">+31 6 1496 8712</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mb-1-9 mb-lg-0">
            <div class="contact-box">
              <i class="fas fa-map-marker-alt text-primary mb-1-6 display-22 display-md-19 display-lg-17 display-xl-14"></i>
              <h4 class="h5 mb-3">Hoofdkantoor</h4>
              <ul class="list-unstyled mb-0">
                <li>Christinastraat 17</li>
                <li>1432 HN AALSMEER</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="contact-box">
              <i class="far fa-envelope text-primary mb-1-6 display-22 display-md-19 display-lg-17 display-xl-14"></i>
              <h4 class="h5 mb-3">E-mail</h4>
              <ul class="list-unstyled mb-0">
                <li><a href="mailto:your@info@klusvrouwmonique.nl">info@klusvrouwmonique.nl</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="contact-wrapper-box">
          <div class="row no-gutters">
            <div class="col-lg-6 d-none d-lg-block" style="height: 555px">
              <background-image class="cover-background h-100" :overlay-dark="0" background-image="img/team/contact-autox555.jpg"></background-image>
            </div>
            <div class="col-lg-6">
              <b-alert class="m-5" variant="success" show v-show="formSubmitted">Dank je wel voor je bericht. Ik neem zo snel mogelijk contact met je op</b-alert>
              <b-alert class="ml-2 mr-2" variant="danger" show v-show="errorMessage">{{ errorMessage }}</b-alert>
              <div class="contact-form-area" v-show="!formSubmitted">
                <h3 class="mb-1-6">Ik hoor graag van je.</h3>
                <form class="quform" v-on:submit.prevent="submitForm">
                  <div class="quform-elements">
                    <div class="row">
                      <!-- Begin Text input element -->
                      <div class="col-md-6">
                        <div class="quform-element form-group">
                          <label for="name">Naam <span class="quform-required">*</span></label>
                          <div class="quform-input">
                            <input class="form-control" type="text" v-model="form.name" placeholder="Jouw naam hier" />
                          </div>
                        </div>
                      </div>
                      <!-- End Text input element -->

                      <!-- Begin Text input element -->
                      <div class="col-md-6">
                        <div class="quform-element form-group">
                          <label for="email">E-mailadres <span class="quform-required">*</span></label>
                          <div class="quform-input">
                            <input class="form-control" type="text" name="email" v-model="form.email" placeholder="Jouw e-mailadres hier" />
                          </div>
                        </div>
                      </div>
                      <!-- End Text input element -->

                      <!-- Begin Text input element -->
                      <div class="col-md-6">
                        <div class="quform-element form-group">
                          <label for="subject">Onderwerp</label>
                          <div class="quform-input">
                            <input class="form-control" type="text" v-model="form.subject" placeholder="Jouw onderwerp hier" />
                          </div>
                        </div>
                      </div>
                      <!-- End Text input element -->

                      <!-- Begin Text input element -->
                      <div class="col-md-6">
                        <div class="quform-element form-group">
                          <label for="phone">Telefoonnummer</label>
                          <div class="quform-input">
                            <input class="form-control" type="text" v-model="form.phone" placeholder="Jouw telefoonnr hier" />
                          </div>
                        </div>
                      </div>
                      <!-- End Text input element -->

                      <!-- Begin Textarea element -->
                      <div class="col-md-12">
                        <div class="quform-element form-group">
                          <label for="message">Bericht <span class="quform-required">*</span></label>
                          <div class="quform-input">
                            <textarea class="form-control" v-model="form.message" rows="3" placeholder="Stel je vraag in een aantal woorden"></textarea>
                          </div>
                        </div>
                      </div>
                      <!-- End Textarea element -->

                      <div class="col-md-12">
                        <div class="quform-submit-inner">
                          <button class="butn theme butn-md" type="submit" :disabled="isBusy"><i class="fa fa-spinner fa-spin mr-2" v-show="isBusy"></i><span>Bericht verzenden</span></button>
                        </div>
                        <div class="quform-loading-wrap text-left"><span class="quform-loading"></span></div>
                      </div>
                    </div>
                  </div>
                </form>
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
  data() {
    return {
      errorMessage: "",
      isBusy: false,
      formSubmitted: false,
      form: {
        name: "",
        email: "",
        message: "",
        subject: "",
        phone: "",
      },
    }
  },
  methods: {
    async submitForm() {
      this.isBusy = true
      this.errorMessage = ""
      if (!this.form.name) {
        this.isBusy = false
        this.errorMessage = "Naam is verplicht"
        return
      }
      if (!this.form.email) {
        this.isBusy = false
        this.errorMessage = "E-mailadres is verplicht"
        return
      }
      if (!this.form.message) {
        this.isBusy = false
        this.errorMessage = "Bericht is verplicht"
        return
      }

      const result = await this.$axios.$post("/contactform", this.form)
      this.formSubmitted = true
    },
  },
  head() {
    return {
      title: `${this.$t('contact.title')}${this.$t('titleExtension')}`,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.$t('contact.title') },
        { property: "og:image", content: '/img/team/contact-monique.jpg' },
        { property: "og:description", content: this.$t('contact.description') },
        { hid: 'description', name: 'description', content: this.$t('contact.description') },
      ],
    }
  },
}
</script>
