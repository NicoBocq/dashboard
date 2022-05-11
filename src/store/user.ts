import { defineStore } from 'pinia'
import { Movie } from '../models/movie.model'

export type RootState = {
  favoriteList: Movie[]
}

export const useDashboard = defineStore('dashboard', {
  state: () => {
    return {
      favoriteList: []
    } as RootState
  },
  actions: {
    addToFavorite (movie: Movie) {
      this.favoriteList.push(movie)
    },
    removeFromFavorite (movie: Movie) {
      this.favoriteList = this.favoriteList.filter(m => m.id !== movie.id)
    }
  }
})
