import { ChangeEvent, ReactNode, useState } from 'react'
import './SelectMenu.scss'

export const SelectMenu = ({
  children,
  onChange,
}: {
  children: ReactNode
  onChange?: (value: string) => any
}) => {
  const [value, setValue] = useState('')

  const _onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(e.target.value)

    setValue('')
  }

  return (
    <select
      defaultValue={'Выберите значение'}
      className="_select-menu"
      onChange={_onChange}
      value={value}
    >
      {children}
    </select>
  )
}
