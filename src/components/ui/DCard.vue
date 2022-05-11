<template>
  <div class="group relative p-4 border-gray-200 sm:p-6">
    <div class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
      <img
        :src="imgUrl"
        :alt="movie.title"
        class="w-full h-full object-center object-cover"
      >
    </div>
    <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-6">
      <h3 class="text-xl font-extrabold text-gray-900 group-hover:opacity-75">
        <a href="#">
          {{ movie.title }}
        </a>
      </h3>
      <HeartIcon class="w-6 h-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { HeartIcon } from '@heroicons/vue/solid'
import { Movie } from '../../models/movie.model'
const props = defineProps<{movie: Movie}>()

const imgUrl = computed(() => `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`)
</script>
