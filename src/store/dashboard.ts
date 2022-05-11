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
          id: 28,
          label: 'Action'
        },
        {
          id: 12,
          label: 'Aventure'
        },
        {
          id: 35,
          label: 'Comédie'
        },
        {
          id: 99,
          label: 'Documentaire'
        }
      ],
      isLoading: true
    } as RootState
  },
  actions: {
    setLoading (payload: boolean) {
      this.isLoading = payload
    },
    async fetchMovies (id = 0) {
      this.setLoading(true)
      let url
      if (!id) {
        url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=09711e051464919907eba6253d0cd44f'
      } else {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=09711e051464919907eba6253d0cd44f&with_genres=${id}`
      }
      await axios.get(url)
        .then((response) => {
          this.movieList = response.data.results
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
