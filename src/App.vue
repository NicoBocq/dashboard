<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useDashboard } from './store'
import DHeader from './components/layout/DHeader.vue'
import DSection from './components/layout/DSection.vue'
import DGrid from './components/layout/DGrid.vue'
import DHeaderSection from "./components/layout/DHeaderSection.vue";

const dashboard = useDashboard()
</script>

<template>
  <DHeader />
  <DHeaderSection />
  <DSection title="kooking">
    <DGrid>
      fff
    </DGrid>
  </DSection>
  {{ dashboard.movieList }}
</template>
