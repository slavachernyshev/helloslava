<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted () {
    this.setupMailchimpPopup()
  },

  methods: {
    setupMailchimpPopup () {
      let chimpPopupLoader = document.createElement("script")
      chimpPopupLoader.src = 'https://chimpstatic.com/mcjs-connected/js/users/6c667c7166723a7e5c304db16/d739af95ab30674873b4f7a29.js'
      document.head.appendChild(chimpPopupLoader)
    }
  }
}
</script>

<style>
</style>
