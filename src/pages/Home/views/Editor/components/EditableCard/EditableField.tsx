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
  return (
    <div className="editable-field">
      {type === 'string' ? (
        <InputText onChange={onChange} value={value.toString()} />
      ) : (
        <InputNum value={Number(value)} onChange={onChange} />
      )}
    </div>
  )
}
