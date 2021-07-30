<template>
  <div class="text-sm text-gray-600 bg-gray-100 px-4 py-8 sm:py-4 sm:p-6 rounded-none sm:rounded-lg -mx-4 sm:mx-0 space-y-2">
    <div class="uppercase font-bold tracking-wide text-xs">{{ label }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Note',

  props: {
    label: {
      type: String,
      default: 'Примечание'
    }
  }
}
</script>
