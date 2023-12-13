import { SkillName, SkillLevels, Parameters } from 'entities/Character'

export * from './CharacterCard'

export const ParametersLocalisations: Record<keyof Parameters, string> = {
  agility: 'Ловкость',
  charisma: 'Харизма',
  dodging: 'Уклонение',
  energy: 'Энергичность',
  intelligence: 'Интелект',
  lifeForce: 'Жизненная сила',
  power: 'Сила',
}

export const SKillNameLocalisations: Record<SkillName, string> = {
  appearance: 'Внешний вид',
  archery: 'Стрельба из лука',
  attack: 'Атака',
  insight: 'Проницательность',
  intimidation: 'Запугивание',
  manipulation: 'Манипулирование',
  medicine: 'Медицина',
  stealth: 'Стелс',
  surviving: 'Выживание',
  trainability: 'Обучаемость',
}

export const SKillLevelLocalisations: Record<keyof typeof SkillLevels, string> =
  {
    0: 'Нетренированный',
    1: 'Новичок',
    2: 'Ученик',
    3: 'Адепт',
    4: 'Эксперт',
    5: 'Мастер',
  }
