import { create } from 'zustand'
import { Character } from 'entities/Character'

/**
 * @name Хранилище персонажей
 */
// Переменная локальная и недоступная снаружи
// это нужно для того чтобы обеспечивать больше контроля
// над тем, что можно получить снаружи
const Characters: Map<string, Character> = new Map()

export type Store = {
  /** Массив из классов персонажей, хранящихся в стейте */
  characters: Character[]

  /**
   * Используется для массового записывания персонажей в стейт
   * @param characters Массив из классов персонажей
   */
  setCharacters(characters: Character[]): void

  /**
   * Обновляет информацию о конкретном персонаже в стейте
   * @param id Айди персонажа
   * @param data Данные персонажа
   */
  updateCharacter(id: string, data: Character): void

  /**
   * Удаляет конкретного персонажа из стейта
   * @param id Айди персонажа
   */
  deleteCharacter(id: string): void

  /**
   * Создает новую запись персонажа по его айди
   * @param character Данные персонажа
   */
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
