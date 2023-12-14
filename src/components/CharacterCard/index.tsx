import { SkillName, SkillLevels, Parameters } from 'entities/Character'

export * from './CharacterCard'

/**
 * Русские локализации для всех параметров
 */
export const ParametersLocalisations: Record<keyof Parameters, string> = {
  agility: 'Ловкость',
  charisma: 'Харизма',
  dodging: 'Уклонение',
  energy: 'Энергичность',
  intelligence: 'Интелект',
  lifeForce: 'Жизненная сила',
  power: 'Сила',
}

/**
 * Русские локализации для всех скиллов
 */
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

/**
 * Русские локализации для всех уровней скиллов
 */
export const SKillLevelLocalisations: Record<keyof typeof SkillLevels, string> =
  {
    0: 'Нетренированный',
    1: 'Новичок',
    2: 'Ученик',
    3: 'Адепт',
    4: 'Эксперт',
    5: 'Мастер',
  }
