<template>
  <client-only>
    <carousel :items="1">
      <img v-for="(img, index) in images" :src="img" :key="index" />
    </carousel>
  </client-only>
</template>

<script>

export default {
  layout(context) {
    return "minimal"
  },
  components: {
    carousel,
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      images: ["https://placeimg.com/200/200/any?1", "https://placeimg.com/200/200/any?2", "https://placeimg.com/200/200/any?3", "https://placeimg.com/200/200/any?4"],
    }
  },
}
</script>