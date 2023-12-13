import { Route, Routes } from 'react-router-dom'

import { Editor } from './views/Editor'
import './Home.scss'
import { Navigation } from './components/Navigation'
import { ViewCharacters } from './views/ViewCharacters'
import { NotFound } from '../NotFound'
import { Export } from './views/Export'
import { Import } from './views/Import'

export const Home = () => {
  return (
    <div className="home-wrapper">
      <Navigation />

      <div className="content">
        <Routes>
          <Route path="/" element={<ViewCharacters />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/export" element={<Export />} />
          <Route path="/import" element={<Import />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
