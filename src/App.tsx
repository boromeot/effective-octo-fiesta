import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Test from './Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<Test />}/>
    </Routes>
  )
}

export default App
