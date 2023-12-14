import { DefaultSkills, ICharacter, Skill, SkillName, Skills } from '.'

export class Character implements ICharacter {
  agility: number = 0
  charisma: number = 0
  intelligence: number = 0
  power: number = 0
  name: string
  createdAt: number

  id: string

  private _MAX_SKILL_LEVEL = 5

  /**
   * Урон, полученный персонажем \
   * Влияет на жизненную силу
   */
  private _damage: number = 0

  get damage(): number {
    return this._damage
  }

  get dodging(): number {
    return this.agility + 10
  }

  get lifeForce(): number {
    return this._format(this.power + 3 - this._damage)
  }

  get energy(): number {
    return this.agility + this.intelligence
  }

  skills: Skills = DefaultSkills

  constructor(data: ICharacter)
  constructor(name: string)
  constructor(data: string | ICharacter) {
    if (typeof data === 'object') this.import(data)
    else if (typeof data === 'string') {
      this.name = data
      this.id = this._generateId()
      this.createdAt = new Date().getTime()
    }
  }

  /**
   * Рдеактирование базовых параметров персонажа
   * @param parameters Объект с новыми значениями параметров
   */
  editParameters(
    parameters: Partial<
      Pick<ICharacter, 'agility' | 'charisma' | 'intelligence' | 'power'>
    >
  ): this {
    for (const key in parameters) {
      const value = parameters[key as keyof typeof parameters]
      if (Number.isNaN(Number(value))) continue

      this[key as keyof typeof parameters] = this._format(value!)
    }

    this._recalculateSkills()

    return this
  }

  /**
   * Редактирование имени персонажа
   * @param name Новое имя
   */
  setName(name: string): this {
    this.name = name

    return this
  }

  /**
   * Нанести 1 единицу урона персонажу
   */
  selfDamage(): this {
    ++this._damage
    return this
  }

  /**
   * Форматирование числа для исключения неприемлимых значений
   * @param num Число
   * @returns Отформатированное число
   */
  private _format(num: number): number {
    if (num < 0 || isNaN(num)) return 0
    return num
  }

  /**
   * Улучшить конкретный навык \
   * Уровень навыка ограничивается уровнем его базового параметра \
   * Максимальный уровень навыка - 5
   * @param name Название навыка
   */
  upgrade(name: SkillName): this {
    const filteredSkill = this.skills.filter((skill) => skill.name === name)[0]

    if (!filteredSkill) return this
    const indexOfSkill = this.skills.indexOf(filteredSkill)
    const skill = { ...filteredSkill }

    if (skill.level + 1 > this._MAX_SKILL_LEVEL) return this

    if (skill.level + 1 > this[skill.baseParameter])
      skill.level = this[skill.baseParameter] as Skill['level']
    else ++skill.level

    this.skills[indexOfSkill] = skill
    return this
  }

  /**
   * Получить информацию о конкретном навыке
   * @param name Название навыка
   */
  getSkill(name: SkillName): Skill | null {
    const skill = this.skills.filter((skill) => skill.name === name)[0]

    return skill
  }

  /**
   * Привести данные персонажа в пригодный для экспорта вариант
   * @returns Данные персонажа в JSON формате
   */
  toJSON(): ICharacter {
    return {
      agility: this.agility,
      charisma: this.charisma,
      dodging: this.dodging,
      id: this.id,
      energy: this.energy,
      intelligence: this.intelligence,
      lifeForce: this.lifeForce,
      name: this.name,
      power: this.power,
      createdAt: this.createdAt,
      damage: this.damage,
      skills: this.skills,
    }
  }

  /**
   * Наследовать характеристики от указанного персонажа
   * @param data Данные персонажа
   */
  import(data: ICharacter) {
    this.name = data.name
    this.agility = this._format(data.agility)
    this.charisma = this._format(data.charisma)
    this.intelligence = this._format(data.intelligence)
    this.power = this._format(data.power)
    this.skills = data.skills
    this._damage = this._format(data.damage)
    this.createdAt = data.createdAt
    this.id = data.id || this._generateId()
  }

  /**
   * Сгенерировать рандомный айди для персонажа
   * @returns Рандомный айди
   */
  private _generateId(): string {
    return Math.random().toString(16).slice(2).toString()
  }

  private _recalculateSkills() {
    this.skills.map((skill, index) => {
      if (skill.level > this._MAX_SKILL_LEVEL)
        skill.level = this._MAX_SKILL_LEVEL as Skill['level']

      if (skill.level > this[skill.baseParameter])
        skill.level = this[skill.baseParameter] as Skill['level']

      this.skills[index] = skill
    })
  }
}
