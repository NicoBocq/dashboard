<template>
  <header class="bg-indigo-600">
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Top"
    >
      <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <router-link to="/">
            <img
              class="h-10 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt=""
            >
          </router-link>
          <div class="hidden ml-10 space-x-8 lg:block">
            <router-link
              v-for="navItem in nav"
              :key="navItem.id"
              v-slot="{ href, navigate, isActive, isExactActive }"
              custom
              :to="{ name: 'Category', params: { id: navItem.id } }"
            >
              <a
                :href="href"
                class="text-base font-medium text-white hover:text-opcacity-75"
                :class="{ 'underline underline-offset-8': isActive || isExactActive }"
                @click="navigate"
              >
                {{ navItem.label }}
              </a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <router-link
          v-for="navItem in nav"
          :key="navItem.id"
          v-slot="{ href, navigate, isActive, isExactActive }"
          :to="{ name: 'Category', params: { id: navItem.id } }"
        >
          <a
            :href="href"
            class="text-base font-medium text-white hover:text-opacity-75"
            custom
            :class="{ 'underline underline-offset-8': isActive || isExactActive }"
            @click="navigate"
          >
            {{ navItem.label }}
          </a>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useDashboard } from '../../store'

const { nav } = useDashboard()

</script>
