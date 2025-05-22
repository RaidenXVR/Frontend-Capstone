
import './index.css'
import MainMenu from './components/MainMenu'
import TestPage from './components/TestPage'
import HistoryPage from './components/HistoryPage'
import { Route, Router, Routes } from 'react-router-dom'
import PracticeWrapper from './components/PracticeWrapper'
function App() {


  return (
    <div className='w-screen h-screen top-0 left-0'>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/practice" element={<PracticeWrapper />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  )
}

export default App
