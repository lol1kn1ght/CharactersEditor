import { Link, useParams } from 'react-router-dom'
import './Navigation.scss'
import { useState } from 'react'

export const Navigation = () => {
  const params = useParams()
  const [current, setCurrent] = useState<string>(params['*'] || '')

  const routes: { to: string; label: string; name: string }[] = [
    {
      label: 'Персонажи',
      to: '/',
      name: '',
    },
    {
      label: 'Редактор',
      to: '/editor',
      name: 'editor',
    },
    {
      label: 'Иморт',
      to: '/import',
      name: 'import',
    },
    {
      label: 'Экспорт',
      to: '/export',
      name: 'export',
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
            className={`control ${route.name === current ? 'active' : ''}`}
            onClick={() => onClick(route.name)}
            key={route.to}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
