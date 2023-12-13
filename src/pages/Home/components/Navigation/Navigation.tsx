import { Link } from 'react-router-dom'
import './Navigation.scss'
import { useState } from 'react'

export const Navigation = () => {
  const [current, setCurrent] = useState<string>('/')

  const routes: { to: string; name: string }[] = [
    {
      name: 'Персонажи',
      to: '/',
    },
    {
      name: 'Редактор',
      to: '/editor',
    },
    {
      name: 'Иморт',
      to: '/import',
    },
    {
      name: 'Экспорт',
      to: '/export',
    },
  ]

  const onClick = (path: string) => {
    setCurrent(path)
  }

  return (
    <header className="_navigation">
      <div className="controls">
        {routes.map((route) => (
          <Link
            to={route.to}
            className={`control ${route.to === current ? 'active' : ''}`}
            onClick={() => onClick(route.to)}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </header>
  )
}
