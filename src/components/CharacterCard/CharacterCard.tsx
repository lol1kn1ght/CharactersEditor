import { SKillLevelLocalisations, SKillNameLocalisations } from '.'
import { ICharacter, Skill } from '../../entities/Character'
import './CharacterCard.scss'

export const CharacterCard = ({ character }: { character: ICharacter }) => {
  const SkillTag = ({ skill }: { skill: Skill }) => {
    return (
      <div className="skill-tag" key={skill.name}>
        <div className="skill-name">{SKillNameLocalisations[skill.name]}:</div>
        <div className="skill-level">
          {SKillLevelLocalisations[skill.level]}
        </div>
      </div>
    )
  }

  console.log(character)

  return (
    <div className="_character-card">
      <div className="character-name">{character.name}</div>
      <div className="characteristics">
        <div>
          <div className="characteristic">
            <div className="name">Ловкость:</div>
            <div className="value">{character.agility}</div>
          </div>
          <div className="characteristic">
            <div className="name">Харизма:</div>
            <div className="value">{character.charisma}</div>
          </div>
          <div className="characteristic">
            <div className="name">Уклонение</div>
            <div className="value">{character.dodging}</div>
          </div>
          <div className="characteristic">
            <div className="name">Энергичность</div>
            <div className="value">{character.energy}</div>
          </div>
        </div>
        <div>
          <div className="characteristic">
            <div className="name">Интелект</div>
            <div className="value">{character.intelligence}</div>
          </div>
          <div className="characteristic">
            <div className="name">Жизненная сила</div>
            <div className="value">{character.lifeForce}</div>
          </div>
          <div className="characteristic">
            <div className="name">Сила</div>
            <div className="value">{character.power}</div>
          </div>
        </div>
      </div>

      <div className="skills">
        {character.skills
          .filter((skill) => skill.level)
          .map((skill) => (
            <SkillTag skill={skill} />
          ))}
      </div>
    </div>
  )
}
