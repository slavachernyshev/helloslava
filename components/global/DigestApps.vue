<template>
  <div class="space-y-2 md:space-y-0 md:flex md:space-x-8 lg:space-x-16 xl:space-x-32 my-8 md:my-12 lg:my-16">
    <div class="space-y-0 w-full md:w-1/3">
      <div class="font-bold">
        <slot name="title"></slot>
      </div>
      <div class="text-sm md:text-md lg:text-lg xl:text-xl text-gray-600"><slot name="short"></slot></div>
    </div>
    <div class="flex-1 text-sm md:text-md lg:text-lg xl:text-xl">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DigestApps'
}
</script>