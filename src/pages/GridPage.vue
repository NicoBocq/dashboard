<template>
  <!-- <DHeaderSection
    :background-image="randomImage"
    :title="nav[+id].label"
  /> -->
  {{ id }}
  <DSection>
    <DGrid>
      <!-- <DCard
        v-for="movie in movieList"
        :key="movie.id"
        :movie="movie"
      /> -->
    </DGrid>
  </DSection>
</template>
<script setup lang="ts">
import { useDashboard } from '../store'

import { computed, watchEffect } from 'vue'

import DSection from '../components/layout/DSection.vue'
import DGrid from '../components/layout/DGrid.vue'
import DHeaderSection from '../components/layout/DHeaderSection.vue'
import DCard from '../components/ui/DCard.vue'

import { useRoute } from 'vue-router'
const { movieList, fetchMovies, getRandomImage, nav } = useDashboard()

const randomImage = computed(() => getRandomImage)
watchEffect(() => {
  console.log(id)
  if (!movieList.length) {
    fetchMovies()
  }
})
const route = useRoute()
const id = route.params.id

</script>
