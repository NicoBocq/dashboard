<template>
  <section
    :aria-labelledby="`${title}-heading`"
    class="container mx-auto max-w-7xl p-4 sm:p-6 lg:p-8"
  >
    <h2
      :id="`${title}-heading`"
      class="sr-only"
    >
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
export type DSectionProps = {
  title: string
}
const props = defineProps<DSectionProps>()
</script>
