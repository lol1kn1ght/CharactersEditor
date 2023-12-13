import { Character, ICharacter, SkillName } from 'entities/Character'
import './EditableCard.scss'
import { useState } from 'react'
import { EditableField } from './EditableField'
import { SelectMenu, SelectOption } from 'components/SelectMenu'
import {
  ParametersLocalisations,
  SKillLevelLocalisations,
  SKillNameLocalisations,
} from 'components/CharacterCard'

export const EditableCard = ({
  character,
  onSave,
  onDelete,
}: {
  character: Character
  onSave: (data: Character) => any
  onDelete: (data: Character) => any
}) => {
  const [data, setData] = useState<Character>(new Character(character.toJSON()))

  const onChange = (field: keyof ICharacter, value: string | number) => {
    data.editParameters({
      [field]: value,
    })

    setData(() => data)
  }

  const damage = () => {
    data.selfDamage()

    alert(
      `Вы ударили персонажа ${data.name}. Нажмите на кнопку "Сохранить" чтобы зафиксировать значения`
    )
  }

  const getCallback = (field: keyof ICharacter) => {
    return (newValue: string | number) => onChange(field, newValue)
  }

  const upgradeSkill = async (skillName: SkillName) => {
    const oldValue = data.getSkill(skillName)

    if (!oldValue)
      return alert(
        'Указанного скилла не найдено! Обновите страницу и попробуйте еще раз'
      )

    if (data[oldValue.baseParameter] < oldValue.level + 1)
      return alert(
        `Вы не можете улучшить этот навык потому что вам необходимо прокачать параметр "${
          ParametersLocalisations[oldValue.baseParameter]
        }"`
      )
    data.upgrade(skillName)

    const newValue = data.getSkill(skillName)

    if (!newValue)
      return alert(
        'При попытке улучшить скилл что-то пошло не так. Обновите страницу и попробуйте еще раз.'
      )

    setData(() => new Character(data.toJSON()))
    alert(
      `Вы улучшили скилл "${SKillNameLocalisations[skillName]}" до уровня "${
        SKillLevelLocalisations[newValue.level]
      }". Нажмите кнопку "Сохранить" чтобы зафиксировать новые значения`
    )
  }

  const fields: {
    name: string
    value: number
    callback: (newValue: number | string) => any
  }[] = [
    {
      name: ParametersLocalisations.power,
      callback: getCallback('power'),
      value: data.power,
    },
    {
      name: ParametersLocalisations.agility,
      callback: getCallback('agility'),
      value: data.agility,
    },
    {
      name: ParametersLocalisations.charisma,
      callback: getCallback('charisma'),
      value: data.charisma,
    },
    {
      name: ParametersLocalisations.intelligence,
      callback: getCallback('intelligence'),
      value: data.intelligence,
    },
  ]

  return (
    <div className="editable-card">
      <div className="parameters edit-block">
        <div className="edit-title">Параметры</div>
        <div className="edit-wrapper">
          <div className="field">
            <div className="field-name">Имя</div>
            <div className="field-value">
              <EditableField
                type="string"
                onChange={(newValue) => (data.name = newValue.toString())}
                value={character.name}
              />
            </div>
          </div>
          {fields.map((field) => (
            <div className="field" key={field.name}>
              <div className="field-name">{field.name}</div>
              <div className="field-value">
                <EditableField
                  type="number"
                  onChange={field.callback}
                  value={field.value}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills edit-block">
        <div className="edit-title">Скиллы</div>
        <div className="edit-wrapper">
          <SelectMenu
            onChange={(value: string) => {
              upgradeSkill(value as SkillName)
            }}
          >
            <SelectOption>Выберите значение</SelectOption>
            {data.skills.map((skill) => (
              <SelectOption
                disabled={skill.level === 5}
                value={skill.name}
                key={skill.name}
              >
                {SKillNameLocalisations[skill.name]} [{[skill.level]}]
              </SelectOption>
            ))}
          </SelectMenu>
        </div>
      </div>

      <div className="actions">
        <button className="secondary" onClick={damage}>
          Ударить
        </button>
        <button className="red" onClick={() => onDelete(data)}>
          Удалить
        </button>
        <button className="green" onClick={() => onSave(data)}>
          Сохранить
        </button>
      </div>
    </div>
  )
}
