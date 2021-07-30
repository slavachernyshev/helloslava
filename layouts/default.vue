<template>
  <div>
    <div class="bg-black h-12 md:h-16 fixed top-0 inset-x-0 z-10 flex justify-between items-center text-gray-100 pr-4 md:px-8">
      <div class="flex items-center text-sm md:text-lg font-medium space-x-3">
        <div class="hidden md:block">Get Secret Level in your inbox every Month</div>
        <div>&rarr;</div>
        <div>
          <nuxt-link to="/subscribe" class="underline font-bold text-white">Подписаться</nuxt-link>
        </div>
      </div>
      <div>
        <a href="#" class="text-white text-sm md:text-lg">Все рассылки</a>
      </div>
    </div>
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-16">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
