import { useState } from 'react'
import './App.css'
import Main from './Component/Main'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Info from './Component/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    
    </>
  )
}

export default App
