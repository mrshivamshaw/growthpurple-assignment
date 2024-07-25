import { useState } from 'react'
import './App.css'
import TestChapter from './components/TestChapter/TestChapter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] h-[100vh] bg-blue-50 flex justify-center items-center'> 
      <TestChapter/>
    </div>
  )
}

export default App
