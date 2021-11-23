<template>
  <div class="bg-yellow-100 rounded-lg xl:text-xl">
    <!-- Header -->
    <div class="font-bold p-8 bg-yellow-200">
      {{ title }}
    </div>
    <!-- Content -->
    <div class="md:flex md:space-x-16 px-8 py-12">
      <div class="w-72 text-sm xl:text-md">
        <slot name="by"></slot>
      </div>
      <div class="flex-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DigestFive',

  props: {
    title: {
      type: String,
      default: 'Worthy Five: Unknown'
    }
  }
}
</script>