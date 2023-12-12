import { useCharactersStore } from 'store'
import { EditableCard } from './components/EditableCard'

export const Editor = () => {
  const store = useCharactersStore()

  const characters = [...store.characters.values()]

  return (
    <div className="editor-view">
      {characters.map((character) => (
        <EditableCard character={character} key={character.id} />
      ))}
    </div>
  )
}
