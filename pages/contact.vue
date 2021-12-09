<template>
  <div>
    <page-title title="Contact" backgroundImage="/img/bg/bg-01.jpg" />

            <section>
            <div class="container">
                <div class="section-heading">
                    <h2 class="display-20 display-md-18 display-lg-16">Zo kom je in contact met Klusvrouw Monique</h2>
                    <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">Voor al uw klussen in en om het huis</p>
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
                                <li>1432 HN  AALSMEER</li>
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
                        <div class="col-lg-6 d-none d-lg-block">
                            <background-image class="cover-background h-100" :overlay-dark="0" background-image="img/team/contact-autox555.jpg"></background-image>
                        </div>
                        <div class="col-lg-6">
                            <div class="contact-form-area">
                                <h3 class="mb-1-6">Wij horen graag van je.</h3>
                                <form class="quform" action="quform/contact.php" method="post" enctype="multipart/form-data" onclick="">

                                    <div class="quform-elements">

                                        <div class="row">

                                            <!-- Begin Text input element -->
                                            <div class="col-md-6">
                                                <div class="quform-element form-group">
                                                    <label for="name">Naam <span class="quform-required">*</span></label>
                                                    <div class="quform-input">
                                                        <input class="form-control" id="name" type="text" name="name" placeholder="Jouw naam hier" />
                                                    </div>
                                                </div>

                                            </div>
                                            <!-- End Text input element -->

                                            <!-- Begin Text input element -->
                                            <div class="col-md-6">
                                                <div class="quform-element form-group">
                                                    <label for="email">E-mailadres <span class="quform-required">*</span></label>
                                                    <div class="quform-input">
                                                        <input class="form-control" id="email" type="text" name="email" placeholder="Jouw e-mailadres hier" />
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Text input element -->

                                            <!-- Begin Text input element -->
                                            <div class="col-md-6">
                                                <div class="quform-element form-group">
                                                    <label for="subject">Onderwerp <span class="quform-required">*</span></label>
                                                    <div class="quform-input">
                                                        <input class="form-control" id="subject" type="text" name="subject" placeholder="Jouw onderwerp hier" />
                                                    </div>
                                                </div>

                                            </div>
                                            <!-- End Text input element -->

                                            <!-- Begin Text input element -->
                                            <div class="col-md-6">
                                                <div class="quform-element form-group">
                                                    <label for="phone">Telefoonnummer</label>
                                                    <div class="quform-input">
                                                        <input class="form-control" id="phone" type="text" name="phone" placeholder="Jouw telefoonnr hier" />
                                                    </div>
                                                </div>

                                            </div>
                                            <!-- End Text input element -->

                                            <!-- Begin Textarea element -->
                                            <div class="col-md-12">
                                                <div class="quform-element form-group">
                                                    <label for="message">Bericht <span class="quform-required">*</span></label>
                                                    <div class="quform-input">
                                                        <textarea class="form-control" id="message" name="message" rows="3" placeholder="Vertel in een aantal woorden"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Textarea element -->

                                            <!-- Begin Captcha element -->
                                            <div class="col-md-12">
                                                <div class="quform-element">
                                                    <div class="form-group">
                                                        <div class="quform-input">
                                                            <input class="form-control" id="type_the_word" type="text" name="type_the_word" placeholder="Typ het onderstaande woord" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="quform-captcha">
                                                            <div class="quform-captcha-inner">
                                                                <img src="quform/images/captcha/courier-new-light.png" alt="...">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Captcha element -->

                                            <!-- Begin Submit button -->
                                            <div class="col-md-12">
                                                <div class="quform-submit-inner">
                                                    <button class="butn theme butn-md" type="submit"><span>Bericht verzenden</span></button>
                                                </div>
                                                <div class="quform-loading-wrap text-left"><span class="quform-loading"></span></div>
                                            </div>
                                            <!-- End Submit button -->

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

</script>
