import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import './App.scss'

export const App = () => {
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
