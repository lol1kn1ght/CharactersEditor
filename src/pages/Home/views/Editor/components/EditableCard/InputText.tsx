import { useEffect, useState } from 'react'

export const InputText = ({
  onChange,
  value,
}: {
  value: string
  onChange: (value: string) => any
}) => {
  const [_value, _setValue] = useState(value)

  useEffect(() => {
    onChange(_value)
  }, [_value])
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setValue(e.target.value)
  }

  return (
    <div className="input-text">
      <input type="text" value={_value} onChange={_onChange} />
    </div>
  )
}
