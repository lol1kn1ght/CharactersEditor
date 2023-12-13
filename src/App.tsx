import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import './App.scss'
import { useEffect } from 'react'
import { useCharactersStore } from './store'
import { Character } from './entities/Character'

export const App = () => {
  const store = useCharactersStore()

  useEffect(() => {
    store.setCharacters([
      new Character('LOlik1').editParameters({
        power: 10,
      }),
      new Character('abobki'),
      new Character('abob2').selfDamage().selfDamage(),
    ])
  }, [])

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
