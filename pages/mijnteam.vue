<template>
  <div>
    <page-title :title="$t('team.title')" backgroundImage="/img/bg/bg-06.jpg" />
    <section>
      <div class="container">
        <div class="section-heading">
          <h2 class="display-20 display-md-18 display-lg-16">{{$t('team.title')}}</h2>
          <p class="w-95 w-md-80 w-lg-60 w-xl-55 mx-auto mb-0">{{$t('slogan')}}</p>
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
  head() {
    return {
      title: `${this.$t('team.title')}${this.$t('titleExtension')}`,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.$t('team.title') },
        { property: "og:image", content: 'contact-monique.jpg' },
        { property: "og:description", content: this.$t('team.description') },
        { hid: 'description', name: 'description', content: this.$t('team.description') },
      ],
    }
  },
}
</script>
