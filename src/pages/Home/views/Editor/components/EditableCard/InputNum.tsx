import { useEffect, useState } from 'react'

export const InputNum = ({
  onChange,
  value,
}: {
  value: number
  onChange: (value: number) => any
}) => {
  const [_value, _setValue] = useState(value)

  useEffect(() => {
    onChange(_value)
  }, [_value])

  const _onChange = (type: 'plus' | 'minus') => {
    if (type === 'plus') {
      _setValue((state) => (state + 1 < 0 ? 0 : state + 1))
    } else if (type === 'minus') {
      _setValue((state) => (state - 1 < 0 ? 0 : state - 1))
    }
  }

  return (
    <div className="input-num">
      <div className="input-value">{_value}</div>
      <div className="input-controls">
        <p className="minus" onClick={() => _onChange('minus')}>
          -
        </p>
        <p className="plus" onClick={() => _onChange('plus')}>
          +
        </p>
      </div>
    </div>
  )
}
