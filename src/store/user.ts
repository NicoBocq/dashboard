import { defineStore } from 'pinia'

export type RootState = {
  favoriteList: number[]
}

export const useUser = defineStore('user', {
  state: () => {
    return {
      favoriteList: []
    } as RootState
  },
  actions: {
    addToFavorite (id: number) {
      if (!this.favoriteList.includes(id)) {
        this.favoriteList.push(id)
      } else {
        this.favoriteList = this.favoriteList.filter(fav => fav !== id)
      }
    }
  }
})
