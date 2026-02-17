import { useState } from 'react'
import './App.css'
import Submission from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
   <Submission/>
    </>
  )
}

export default App
