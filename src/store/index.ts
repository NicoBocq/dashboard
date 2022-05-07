import { defineStore } from 'pinia'
import { Movie } from '../models/movie.model'

export type RootState = {
  movieList: Movie[];
  nav: string[]
}

export const useDashboard = defineStore('dashboard', {
  state: () => {
    return {
      movieList: [],
      nav: []
    } as RootState
  },
  actions: {
    fetchMovies (payload) {
      this.movieList.push(payload)
    }
  }
})
