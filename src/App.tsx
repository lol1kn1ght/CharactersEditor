import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import './App.scss'
import { Character } from './entities/Character'

export const App = () => {
  const character = new Character('LoliKnight').editParameters({
    power: 3,
    agility: 5,
  })

  character.selfDamage()
  character.selfDamage()

  console.log(character)
  const character2 = new Character(character.toJSON())
  console.log(character2.setName('lolik2'))

  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={<Home />} />

        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  )
}
