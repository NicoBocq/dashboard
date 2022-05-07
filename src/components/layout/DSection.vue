<template>
  <section aria-labelledby="products-heading" class="mt-8">
    <h2 id="products-heading" class="sr-only">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
interface DSectionProps {
  title: string
}

const props = defineProps<DSectionProps>()
</script>
