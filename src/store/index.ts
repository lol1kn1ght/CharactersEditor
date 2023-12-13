import { create } from 'zustand'
import { Character } from 'entities/Character'

const Characters: Map<string, Character> = new Map()

export type Store = {
  characters: Character[]

  setCharacters(characters: Character[]): void
  updateCharacter(id: string, data: Character): void
  deleteCharacter(id: string): void
  createCharacter(character: Character): void
}

export const useCharactersStore = create<Store>((set) => ({
  get characters(): Character[] {
    return [...Characters.values()].sort(
      (prev, curr) => curr.createdAt - prev.createdAt
    )
  },

  createCharacter(character: Character) {
    set(() => {
      Characters.set(character.id, character)

      return { characters: [...Characters.values()] }
    })
  },

  updateCharacter(id: string, data: Character) {
    set(() => {
      Characters.set(id, data)

      return { characters: [...Characters.values()] }
    })
  },

  setCharacters(characters: Character[]) {
    set(() => {
      characters.map((character) => {
        Characters.set(character.id, character)
      })

      return { characters: [...Characters.values()] }
    })
  },

  deleteCharacter(characterId: string) {
    set(() => {
      Characters.delete(characterId)

      return { characters: [...Characters.values()] }
    })
  },
}))
