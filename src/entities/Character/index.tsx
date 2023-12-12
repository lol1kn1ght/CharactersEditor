export * from './Character'

/**
 * @name Базовые параметры
 * @description Базовые параметры могут изменяться пользователем напрямую
 */
export type BaseParameters = {
  /**
   * @name Сила персонажа
   * @default 0
   */
  power: number
  /**
   * @name Ловкость
   * @default 0
   */
  agility: number
  /**
   * @name Интелект
   * @default 0
   */
  intelligence: number
  /**
   * @name Харизма
   * @default 0
   */
  charisma: number
}

/**
 * @name Динамические параметры
 * @description Не могут изменяться пользователем напрямую. \
 * Зависят от значений базовых параметров
 */
export type DynamicParameters = {
  /**
   * @name Жизненная сила
   * @description Расчитывается как: power + 3 \
   * Теряется 1 единица при получении урона
   */
  lifeForce: number
  /**
   * @name Уклонение
   * @description Расчитывается как: agility + 10
   */
  dodging: number
  /**
   * @name Энергичность
   * @description Расчитывается как: agility + intelligence
   */
  energy: number
}

/**
 * @name Параметры персонажа
 * @description Параметры которые может иметь персонаж
 */
export type Parameters = BaseParameters & DynamicParameters

export interface ICharacter extends Parameters {
  /** @name Имя персонажа */
  name: string

  /** @name Навыки персонажа */
  skills: Skills

  /** @name Урон, полученный персонажем */
  damage: number

  /** @name Уникальный идентификатор персонажа */
  id: string
}

export enum SkillLabel {
  /** @name Нетренированный */
  Untrained = 'untrained',
  /** @name Новичок */
  Beginner = 'beginner',
  /** @name Ученик */
  Student = 'student',
  /** @name Адепт */
  Adept = 'adept',
  /** @name Эксперт */
  Expert = 'expert',
  /** @name Мастер */
  Master = 'master',
}

export const SkillLevels = {
  0: SkillLabel.Untrained,
  1: SkillLabel.Beginner,
  2: SkillLabel.Student,
  3: SkillLabel.Adept,
  4: SkillLabel.Expert,
  5: SkillLabel.Master,
}

export type Skill = {
  name: SkillName
  level: keyof typeof SkillLevels
  baseParameter: keyof BaseParameters
}

export enum SkillName {
  /** @name Атака */
  Attack = 'attack',
  /** @name Стелс */
  Stealth = 'stealth',
  /** @name Стрельба из лука */
  Archery = 'archery',
  /** @name Обучаемость */
  Trainability = 'trainability',
  /** @name Выживание */
  Surviving = 'surviving',
  /** @name Медицина */
  Medicine = 'medicine',
  /** @name Запугивание */
  Intimidation = 'intimidation',
  /** @name Проницательность */
  Insight = 'insight',
  /** @name Внешний вид */
  Appearance = 'appearance',
  /** @name Манипулирование */
  Manipulation = 'manipulation',
}

export type Skills = Skill[]

export const DefaultSkills: Skills = [
  {
    level: 0,
    name: SkillName.Attack,
    baseParameter: 'power',
  },

  {
    level: 0,
    name: SkillName.Stealth,
    baseParameter: 'agility',
  },
  {
    level: 0,
    name: SkillName.Archery,
    baseParameter: 'agility',
  },

  {
    level: 0,
    name: SkillName.Trainability,
    baseParameter: 'intelligence',
  },
  {
    level: 0,
    name: SkillName.Surviving,
    baseParameter: 'intelligence',
  },
  {
    level: 0,
    name: SkillName.Medicine,
    baseParameter: 'intelligence',
  },

  {
    level: 0,
    name: SkillName.Intimidation,
    baseParameter: 'charisma',
  },
  {
    level: 0,
    name: SkillName.Insight,
    baseParameter: 'charisma',
  },
  {
    level: 0,
    name: SkillName.Appearance,
    baseParameter: 'charisma',
  },
  {
    level: 0,
    name: SkillName.Manipulation,
    baseParameter: 'charisma',
  },
]
