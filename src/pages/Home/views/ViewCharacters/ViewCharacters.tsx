import { CharacterCard } from '../../../../components/CharacterCard'
import { Character, SkillName } from '../../../../entities/Character'

export const ViewCharacters = () => {
  const character = new Character('LoliKnight').editParameters({
    agility: 5,
    charisma: 5,
    intelligence: 5,
    power: 5,
  })

  character.upgrade(SkillName.Appearance)
  character.upgrade(SkillName.Appearance)
  character.upgrade(SkillName.Appearance)
  character.upgrade(SkillName.Appearance)
  character.upgrade(SkillName.Archery)
  character.upgrade(SkillName.Archery)
  character.upgrade(SkillName.Archery)
  character.upgrade(SkillName.Archery)

  return (
    <div>
      <CharacterCard character={character} />
    </div>
  )
}
