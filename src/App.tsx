import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SummonerPage from './pages/SummonerPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<SummonerPage />}/>
    </Routes>
  )
}

export default App
