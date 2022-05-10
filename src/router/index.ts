import { createWebHistory, createRouter } from 'vue-router'

import GridPage from '../pages/GridPage.vue'
const history = createWebHistory()

const routes = [
  { path: '/', name: 'Home', component: GridPage },
  { path: '/category/:id', name: 'Category', component: GridPage }
]
const router = createRouter({ history, routes })
export default router
