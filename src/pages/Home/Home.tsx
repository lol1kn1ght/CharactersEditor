import { Navigate, Route, Routes } from 'react-router-dom'
import { Default } from './views/Default'
import { Editor } from './views/Editor'

export const Home = () => {
  return (
    <div className="home-wrapper">
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  )
}
