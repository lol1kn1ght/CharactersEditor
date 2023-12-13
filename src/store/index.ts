import { create } from 'zustand'
import { Character } from 'entities/Character'

export type Store = {
  characters: Map<string, Character>

  setCharacters(characters: Character[]): void
  updateCharacter(id: string, data: Character): void
  deleteCharacter(id: string): void
}

export const useCharactersStore = create<Store>((set) => ({
  characters: new Map(),

  updateCharacter(id: string, data: Character) {
    set((state) => {
      this.characters.set(id, data)

      return { characters: this.characters }
    })
  },

  setCharacters(characters: Character[]) {
    set((state) => {
      characters.map((character) => {
        state.characters.set(character.id, character)
      })

      return { characters: state.characters }
    })
  },

  deleteCharacter(characterId: string) {
    set((state) => {
      state.characters.delete(characterId)

      return { characters: state.characters }
    })
  },
}))
