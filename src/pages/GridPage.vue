<template>
  <DHeaderSection
    title="zob"
    :background-image="getRandomImage"
    :is-loading="isLoading"
  />
  <DSection title="fdsf">
    <DGrid>
      <transition-group
        v-if="!isLoading"
        name="list"
      >
        <DCard
          v-for="movie in movieList"
          :key="movie.id"
          :movie="movie"
        />
      </transition-group>
      <template v-else>
        <SkeletonCard
          v-for="n in 8"
          :key="n"
        />
      </template>
    </DGrid>
  </DSection>
</template>
<script setup lang="ts">
import { useDashboard } from '../store/dashboard'

import DSection from '../components/layout/DSection.vue'
import DGrid from '../components/layout/DGrid.vue'
import DHeaderSection from '../components/layout/DHeaderSection.vue'
import DCard from '../components/ui/DCard.vue'

import { onBeforeRouteUpdate } from 'vue-router'
import { storeToRefs } from 'pinia'
import SkeletonCard from '../components/ui/SkeletonCard.vue'
const { fetchMovies } = useDashboard()
const store = useDashboard()
const { getRandomImage, movieList, isLoading } = storeToRefs(store)

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    await fetchMovies(+to.params.id)
  }
})
</script>
