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
      characters.map((character) => {
        state.characters.set(character.id, character)
      })

      return { characters: state.characters }
    })
  },

  deletCharacter(characterId: string) {
    set((state) => {
      state.characters.delete(characterId)

      return { characters: state.characters }
    })
  },
}))
