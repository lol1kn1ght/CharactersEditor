import { useCharactersStore } from 'store'
import './Import.scss'
import { Character, ICharacter } from 'entities/Character'

export const Import = () => {
  const store = useCharactersStore()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fileReader = new FileReader()
    const files = (e.target as HTMLInputElement).files

    fileReader.readAsText(files![0], 'UTF-8')
    fileReader.onload = (e) => {
      const data = e.target!.result?.toString()
      if (!data) return alert('Импортирован некорректный файл')

      try {
        const parsedData: ICharacter[] = JSON.parse(data)

        if (!Array.isArray(parsedData)) throw new Error()

        store.setCharacters(
          parsedData.map((character) => new Character(character))
        )
        alert(`Вы успешно импортировали ${parsedData.length} персонажей!`)
      } catch (e) {
        return alert('Импортирован некорректный файл')
      }
    }
  }
  return (
    <div className="import-view">
      <div className="import-title">Загрузить ваших персонажей</div>
      <div className="import-description">
        Чтобы загрузить ваших персонажей из скачанного ранее файла, нажмите на
        кнопку ниже
      </div>

      <input
        type="file"
        onChange={handleChange}
        placeholder="Загрузить"
        className="import-form"
        accept=".json"
      />
    </div>
  )
}
