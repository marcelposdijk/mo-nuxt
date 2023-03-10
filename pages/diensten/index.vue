<template>
  <div>
    <page-title :title="$t('diensten.title')" backgroundImage="/img/bg/bg-04.jpg" />
    <section>
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">{{ $t('diensten.DienstenDieIkAanbied') }}</h2>
          <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">{{$t('slogan')}}</p>
        </div>
        <services />
      </div>
    </section>
  </div>
</template>

<script>
import Services from "@/components/Services"
export default {
  components: {
    Services,
  },
}
</script>
