import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sudoku',
    name: 'sudoku',
    component: () => import('../views/SudokuView.vue')
  },
  {
    path: '/forca',
    name: 'forca',
    component: () => import('../views/ForcaView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
