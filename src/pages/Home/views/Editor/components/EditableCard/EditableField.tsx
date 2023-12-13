import { useState } from 'react'
import { InputText } from './InputText'
import { InputNum } from './InputNum'

type InputFieldType = 'number' | 'string'

export const EditableField = ({
  value,
  type,
  onChange,
}: {
  value: string | number
  onChange: (value: string | number) => any
  type: InputFieldType
}) => {
  const [_value, _setValue] = useState<string | number>(value)

  return (
    <div className="editable-field">
      {type === 'string' ? (
        <InputText onChange={onChange} value={_value.toString()} />
      ) : (
        <InputNum value={Number(_value)} onChange={onChange} />
      )}
    </div>
  )
}
