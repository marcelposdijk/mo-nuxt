<template lang="html">
    <div id="preloader" v-if="loading">
      <div class="row loader">
        <div class="loader-icon"></div>
      </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

