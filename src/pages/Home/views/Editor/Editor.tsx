import { useCharactersStore } from 'store'
import { EditableCard } from './components/EditableCard'
import './Editor.scss'
import { Character } from 'entities/Character'

export const Editor = () => {
  const store = useCharactersStore()

  const characters = [...store.characters.values()]

  const onSave = (data: Character) => {
    store.updateCharacter(data.id, data)
    alert(
      `Вы успешно сохранили новые характеристики для персонажа ${data.name}`
    )
  }

  return (
    <div className="editor-view">
      {characters.map((character) => (
        <EditableCard
          onSave={onSave}
          character={character}
          key={character.id}
        />
      ))}
    </div>
  )
}
