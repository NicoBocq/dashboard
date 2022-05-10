import { defineStore } from 'pinia'
import { Movie } from '../models/movie.model'
import axios from 'axios'

export type NavItem = {
  id: number
  label: string
}
export type RootState = {
  movieList: Movie[]
  nav: NavItem[]
  isLoading: boolean
}

export const useDashboard = defineStore('dashboard', {
  state: () => {
    return {
      movieList: [],
      nav: [
        {
          id: 1,
          label: 'Action'
        },
        {
          id: 2,
          label: 'Aventure'
        },
        {
          id: 3,
          label: 'Comédie'
        },
        {
          id: 4,
          label: 'Documentaire'
        }
      ],
      isLoading: false
    } as RootState
  },
  actions: {
    setLoading (payload: boolean) {
      this.isLoading = payload
    },
    async fetchMovies () {
      this.setLoading(true)
      await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=09711e051464919907eba6253d0cd44f')
        .then((response) => {
          this.movieList.push(...response.data.results)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => this.setLoading(false))
    }
  },
  getters: {
    getRandomImage (state: RootState) {
      if (state.movieList.length > 0) {
        const image = state.movieList[Math.floor(Math.random() * state.movieList.length)].backdrop_path
        return `https://image.tmdb.org/t/p/w500${image}`
      }
    }
  }
})
