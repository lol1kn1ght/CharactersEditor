import { ReactNode } from 'react'

export const SelectOption = ({
  children,
  selected,
  value,
  disabled,
}: {
  children: ReactNode
  selected?: boolean
  value?: string
  disabled?: boolean
}) => {
  return (
    <option
      disabled={disabled}
      selected={selected}
      value={value}
      className="_select-option"
    >
      {children}
    </option>
  )
}
