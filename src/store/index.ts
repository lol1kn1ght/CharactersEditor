import { create } from 'zustand'
import { ICharacter } from '../entities/Character'

export type Store = {
  characters: Map<string, ICharacter>

  setCharacters(characters: ICharacter[]): void
}

export const useCharactersStore = create<Store>((set) => ({
  characters: new Map(),

  setCharacters(characters: ICharacter[]) {
    set((state) => {
      console.log(characters)

      characters.map((character) => {
        const id = Math.random().toString(16).slice(2).toString()
        console.log('set')

        state.characters.set(id, character)
      })

      return { characters: state.characters }
    })
  },
}))
