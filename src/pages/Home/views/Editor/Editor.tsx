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

  const onDelete = async (data: Character) => {
    const answer = window.confirm(
      `Вы точно хотите удалить персонажа "${data.name}"?`
    )

    if (!answer) return

    store.deleteCharacter(data.id)
    alert(`Вы успешно удалили персонажа "${data.name}"`)
  }

  const charactersArray = characters.map((character) => (
    <EditableCard
      onDelete={onDelete}
      onSave={onSave}
      character={character}
      key={character.id}
    />
  ))

  return (
    <div className="editor-view">
      {characters[0] ? charactersArray : 'Ваш список персонажей пуст!'}
    </div>
  )
}
