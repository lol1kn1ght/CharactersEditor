import { DefaultSkills, ICharacter, Skill, SkillName, Skills } from '.'

export class Character implements ICharacter {
  agility: number = 0
  charisma: number = 0
  intelligence: number = 0
  power: number = 0
  name: string

  id: string = this.generateId()

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
    this.name = ''

    if (typeof data === 'object') this.import(data)
    else if (typeof data === 'string') this.name = data
  }

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

    return this
  }

  setName(name: string): this {
    this.name = name

    return this
  }

  selfDamage(): this {
    ++this._damage
    return this
  }

  private _format(num: number): number {
    if (num < 0) return 0
    return num
  }

  upgrade(name: SkillName): this {
    const filteredSkill = this.skills.filter((skill) => skill.name === name)[0]

    if (!filteredSkill) return this
    const indexOfSkill = this.skills.indexOf(filteredSkill)
    const skill = { ...filteredSkill }

    if (skill.level + 1 > this[skill.baseParameter])
      skill.level = this[skill.baseParameter] as Skill['level']
    else ++skill.level

    this.skills[indexOfSkill] = skill
    return this
  }

  toJSON(): ICharacter {
    const {
      agility,
      charisma,
      dodging,
      energy,
      intelligence,
      lifeForce,
      name,
      power,
      skills,
      damage,
      id,
    } = this
    return {
      agility,
      charisma,
      dodging,
      id,
      energy,
      intelligence,
      lifeForce,
      name,
      power,
      damage,
      skills,
    }
  }

  import(data: ICharacter) {
    this.name = data.name
    this.agility = data.agility
    this.charisma = data.charisma
    this.intelligence = data.intelligence
    this.power = data.power
    this.skills = data.skills
    this._damage = data.damage
    this.id = this.generateId()
  }

  generateId(): string {
    return Math.random().toString(16).slice(2).toString()
  }
}
