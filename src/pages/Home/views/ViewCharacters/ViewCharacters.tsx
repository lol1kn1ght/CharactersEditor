import { CharacterCard } from 'components/CharacterCard'
import { useCharactersStore } from 'store'
import './ViewCharacters.scss'

export const ViewCharacters = () => {
  const characters = useCharactersStore((state) => state.characters)

  const charactersList = characters.map((character) => (
    <CharacterCard character={character} key={character.id} />
  ))

  return (
    <div className="characters-view">
      {charactersList[0] ? charactersList : 'Ваш список персонажей пуст!'}
    </div>
  )
}
