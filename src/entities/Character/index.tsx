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
 * Параметры персонажа
 * Параметры которые может иметь персонаж
 */
export type Parameters = BaseParameters & DynamicParameters

export interface ICharacter extends Parameters {
  /** Имя персонажа */
  name: string

  /** Навыки персонажа */
  skills: Skills

  /** Урон, полученный персонажем */
  damage: number

  /** Уникальный идентификатор персонажа */
  id: string

  /** Дата создания персонажа */
  createdAt: number
}

export enum SkillLabel {
  /** Нетренированный */
  Untrained = 'untrained',
  /** Новичок */
  Beginner = 'beginner',
  /** Ученик */
  Student = 'student',
  /** Адепт */
  Adept = 'adept',
  /** Эксперт */
  Expert = 'expert',
  /** Мастер */
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
  /**
   * Название скилла
   */
  name: SkillName

  /**
   * Уровень скилла
   */
  level: keyof typeof SkillLevels

  /**
   * Базовый параметр, от которого зависит скилл
   */
  baseParameter: keyof BaseParameters
}

export enum SkillName {
  /** Атака */
  Attack = 'attack',
  /** Стелс */
  Stealth = 'stealth',
  /** Стрельба из лука */
  Archery = 'archery',
  /** Обучаемость */
  Trainability = 'trainability',
  /** Выживание */
  Surviving = 'surviving',
  /** Медицина */
  Medicine = 'medicine',
  /** Запугивание */
  Intimidation = 'intimidation',
  /** Проницательность */
  Insight = 'insight',
  /** Внешний вид */
  Appearance = 'appearance',
  /** Манипулирование */
  Manipulation = 'manipulation',
}

export type Skills = Skill[]

/**
 * Набор скиллов, назначающийся персонажу по умолчанию
 */
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
