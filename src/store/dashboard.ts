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
        { id: 1, label: 'Trending' },
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
    async fetchMovies (id: number) {
      this.setLoading(true)
      let url
      if (!id || id === 1) {
        url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_PWD}`
      } else {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_PWD}&with_genres=${id}`
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
      } else {
        return ''
      }
    },
    getSectionTitle: (state: RootState) => (id: number) => {
      const category = state.nav.find(cat => cat.id === id)
      return category ? category.label : state.nav[0].label
    }

  }
})
