import { DefaultSkills, ICharacter, Skills } from '.'

export class Character implements ICharacter {
  agility: number = 0
  charisma: number = 0
  intelligence: number = 0
  power: number = 0

  get dodging(): number {
    return this.agility + 10
  }

  get lifeForce(): number {
    return this.power + 3
  }

  get energy(): number {
    return this.agility + this.intelligence
  }

  skills: Skills = DefaultSkills

  constructor(public name: string) {}

  editParameters(
    parameters: Partial<
      Pick<ICharacter, 'agility' | 'charisma' | 'intelligence' | 'power'>
    >
  ): this {
    for (const key in parameters) {
      const value = parameters[key as keyof typeof parameters]
      if (Number.isNaN(Number(value))) continue

      this[key as keyof typeof parameters] = value!
    }

    return this
  }
}
