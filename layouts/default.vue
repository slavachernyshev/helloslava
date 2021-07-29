<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <Nuxt />
  </div>
</template>

<script>
export default {
  // https://nuxtjs.org/docs/2.x/components-glossary/pages-head
  head () {
    return {
      // https://github.com/nuxt/nuxt.js/issues/2230
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/6c667c7166723a7e5c304db16/d739af95ab30674873b4f7a29.js");', id="mcjs" }
      ]
    }
  }
}
</script>

<style>
</style>
