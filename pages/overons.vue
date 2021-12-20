<template>
  <div>
    <page-title title="Over ons" backgroundImage="/img/bg/bg-06.jpg" />
    <section>
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">Over ons</h2>
          <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">Voor al uw klussen in en om het huis!</p>
        </div>
        <team />
      </div>
    </section>
  </div>
</template>

<script>
import Team from "@/components/Team"

export default {
  components: {
    Team,
  },
}
</script>
