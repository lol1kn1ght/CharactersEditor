import { useCharactersStore } from 'store'
import './Export.scss'

export const Export = () => {
  const store = useCharactersStore()

  const data = store.characters.map((character) => character.toJSON())

  const stringifiedData = JSON.stringify(data)
  const blob = new Blob([stringifiedData], { type: 'text/json' })
  const url = URL.createObjectURL(blob)

  return (
    <div className="export-view">
      <div className="export-title">Скачать ваших персонажей</div>
      <div className="export-description">
        Нажмите на кнопку ниже чтобы скачать файл с вашими персонажами
      </div>

      <div className="export-form">
        <a href={url} download={'characters.json'}>
          Скачать
        </a>
      </div>
    </div>
  )
}
