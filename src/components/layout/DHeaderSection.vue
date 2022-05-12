<template>
  <div class="relative bg-stone-900">
    <div class="absolute inset-0">
      <img
        v-if="!isLoading || !backgroundImage"
        class="w-full h-full object-cover"
        :src="backgroundImage"
      >
      <div
        class="absolute inset-0 bg-stone-500 mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
    <div
      class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
    >
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
export type SectionHeaderProps = {
  title?: string
  backgroundImage: string
  isLoading: boolean
}

const props = defineProps<SectionHeaderProps>()
</script>
