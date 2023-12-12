import { SkillName, SkillLevels } from 'entities/Character'

export * from './CharacterCard'

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
