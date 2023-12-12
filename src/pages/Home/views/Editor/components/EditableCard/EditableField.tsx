import { useState } from 'react'

type InputFieldType = 'number' | 'string'

export const EditableField = ({
  value,
  type,
}: {
  value: string
  type?: InputFieldType
}) => {
  const [localValue, setLocalValue] = useState(value)
  const [display, setDisplay] = useState<'preview' | 'input'>('preview')

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.detail != 2) return

    if (display === 'preview') setDisplay('input')
    else setDisplay('preview')
  }

  return (
    <div className="editable-field" onClick={onClick}>
      {display === 'input' ? (
        <input
          type="text"
          value={localValue}
          placeholder={localValue || 'Введите новое значение'}
          onChange={(e) => setLocalValue(e.target.value)}
        />
      ) : (
        <p>{localValue}</p>
      )}
    </div>
  )
}
