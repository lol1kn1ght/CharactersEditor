import { CharacterCard } from '../../../../components/CharacterCard'
import { useCharactersStore } from '../../../../store'
import './ViewCharacters.scss'

export const ViewCharacters = () => {
  const characters = useCharactersStore((state) => state.characters)

  const charactersArray = [...characters.values()]

  const charactersList = charactersArray.map((character) => (
    <CharacterCard character={character} key={character.name} />
  ))

  return (
    <div className="view-characters">
      {charactersList[0] ? charactersList : 'Ваш список персонажей пуст!'}
    </div>
  )
}
