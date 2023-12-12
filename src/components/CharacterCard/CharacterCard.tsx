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

  return (
    <div className="_character-card" key={character.id}>
      <div className="character-name">{character.name}</div>
      <div className="characteristics info-block">
        <div className="info-title">Навыки</div>
        <div className="info-wrapper">
          <div>
            <div className="characteristic">
              <div className="characteristic-name">Ловкость</div>
              <div className="characteristic-value">{character.agility}</div>
            </div>
            <div className="characteristic">
              <div className="characteristic-name">Харизма</div>
              <div className="characteristic-value">{character.charisma}</div>
            </div>
            <div className="characteristic">
              <div className="characteristic-name">Уклонение</div>
              <div className="characteristic-value">{character.dodging}</div>
            </div>
            <div className="characteristic">
              <div className="characteristic-name">Энергичность</div>
              <div className="characteristic-value">{character.energy}</div>
            </div>
          </div>
          <div>
            <div className="characteristic">
              <div className="characteristic-name">Интелект</div>
              <div className="characteristic-value">
                {character.intelligence}
              </div>
            </div>
            <div className="characteristic">
              <div className="characteristic-name">Жизненная сила</div>
              <div className="characteristic-value">{character.lifeForce}</div>
            </div>
            <div className="characteristic">
              <div className="characteristic-name">Сила</div>
              <div className="characteristic-value">{character.power}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills info-block">
        <div className="info-title">Скиллы</div>

        <div className="info-wrapper">
          {character.skills.map((skill) => (
            <SkillTag skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}
