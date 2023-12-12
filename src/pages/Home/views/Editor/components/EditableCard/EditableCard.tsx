import { ICharacter } from 'entities/Character'
import './EditableCard.scss'
import { useState } from 'react'
import { EditableField } from './EditableField'

export const EditableCard = ({ character }: { character: ICharacter }) => {
  const [data, setData] = useState<ICharacter>({ ...character })

  return (
    <div className="editable-card">
      <div className="field">
        <div className="field-name">Имя</div>
        <div className="field-value">
          <EditableField value={character.name} />
        </div>
      </div>

      <div className="field">
        <div className="field-name">Имя</div>
        <div className="field-value">
          <EditableField value={character.name} />
        </div>
      </div>
    </div>
  )
}
