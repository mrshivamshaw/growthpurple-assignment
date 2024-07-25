import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-yellow-300 text-2xl'> 
      Hello world
    </div>
  )
}

export default App
