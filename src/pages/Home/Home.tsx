import { Route, Routes } from 'react-router-dom'
import { Default } from './views/Default'
import { Editor } from './views/Editor'
import './Home.scss'
import { Navigation } from './components/Navigation'
import { ViewCharacters } from './views/ViewCharacters'
import { NotFound } from '../NotFound'

export const Home = () => {
  return (
    <div className="home-wrapper">
      <Navigation />

      <div className="content">
        <Routes>
          <Route path="/" element={<ViewCharacters />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
