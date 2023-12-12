import { SKillLevelLocalisations, SKillNameLocalisations } from '.'
import { ICharacter, Skill } from 'entities/Character'
import './CharacterCard.scss'

export const CharacterCard = ({ character }: { character: ICharacter }) => {
  const SkillTag = ({ skill }: { skill: Skill }) => {
    return (
      <div className="skill-tag">
        <div className="skill-name">{SKillNameLocalisations[skill.name]}:</div>
        <div className="skill-level">
          {SKillLevelLocalisations[skill.level]}
        </div>
      </div>
    )
  }

  //
  const characteristics: { name: string; value: number }[][] = [
    [
      {
        name: 'Ловкость',
        value: character.agility,
      },
      {
        name: 'Харизма',
        value: character.charisma,
      },
      {
        name: 'Уклонение',
        value: character.dodging,
      },
      {
        name: 'Энергичность',
        value: character.energy,
      },
    ],
    [
      {
        name: 'Интелект',
        value: character.intelligence,
      },
      {
        name: 'Жизненная сила',
        value: character.lifeForce,
      },
      {
        name: 'Сила',
        value: character.power,
      },
    ],
  ]

  const Characteristics = () => {
    return (
      <>
        {characteristics.map((characteristicsArray, index) => (
          <div key={index}>
            {characteristicsArray.map((characteristic) => (
              <div className="characteristic" key={characteristic.name}>
                <div className="characteristic-name">{characteristic.name}</div>
                <div className="characteristic-value">
                  {characteristic.value}
                </div>
              </div>
            ))}
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="_character-card">
      <div className="character-name">{character.name}</div>
      <div className="characteristics info-block">
        <div className="info-title">Навыки</div>
        <div className="info-wrapper">
          <Characteristics />
        </div>
      </div>

      <div className="skills info-block">
        <div className="info-title">Скиллы</div>

        <div className="info-wrapper">
          {character.skills.map((skill) => (
            <SkillTag skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
