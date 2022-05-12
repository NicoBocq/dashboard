<template>
  <DHeaderSection
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

import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import SkeletonCard from '../components/ui/SkeletonCard.vue'
import { watchEffect } from 'vue'
const router = useRoute()
const { fetchMovies } = useDashboard()
const dashboarStore = useDashboard()
const { getRandomImage, movieList, isLoading } = storeToRefs(dashboarStore)
const { id } = router.params

watchEffect(() => {
  if (!movieList.value.length) {
    fetchMovies(+id)
  }
})

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    await fetchMovies(+to.params.id)
  }
})
</script>
