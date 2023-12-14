import { ChangeEvent, ReactNode, useState } from 'react'
import './SelectMenu.scss'

/**
 * Выпадающее меню выбора параметров
 * @param children Параметры для меню. Желательно использовать SelectOption
 * @param onChange Функция, срабатывающая при выборе пункта в меню
 */
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

    // Сброс текущего значения меню
    // чтобы всегда отображался дефолтный параметр
    setValue('')
  }

  return (
    <select className="_select-menu" onChange={_onChange} value={value}>
      {children}
    </select>
  )
}
