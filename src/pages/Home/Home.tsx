import { Navigate, Route, Routes } from 'react-router-dom'
import { Default } from './views/Default'
import { Editor } from './views/Editor'
import './Home.scss'
import { Navigation } from './components/Navigation'

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="navigation">
        <Navigation />
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    </div>
  )
}
