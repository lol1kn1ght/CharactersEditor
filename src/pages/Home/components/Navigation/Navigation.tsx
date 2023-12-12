import { Link } from 'react-router-dom'
import './Navigation.scss'

export const Navigation = () => {
  return (
    <div className="_navigation">
      <div className="controls">
        <Link to="/characters" className="control">
          Персонажи
        </Link>
        <Link to="/editor" className="control">
          Редактор
        </Link>
        <Link to="/import" className="control">
          Импорт
        </Link>
        <Link to="/export" className="control">
          Экспорт
        </Link>
      </div>
    </div>
  )
}
