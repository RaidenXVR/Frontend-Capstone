import './index.css'
import MainMenu from './components/MainMenu'
import TestPage from './components/TestPage'
import LeaderboardPage from './components/LeaderboardPage'
import ResultPage from './components/ResultPage';
import ResultPageTest from './components/ResultPageTest';
import AboutPage from './components/AboutPage';
import { Route, Router, Routes } from 'react-router-dom'
import PracticeWrapper from './components/PracticeWrapper'
function App() {

  return (
    <div className='w-screen h-screen top-0 left-0'>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/practice" element={<PracticeWrapper />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/result-tes" element={<ResultPageTest />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
