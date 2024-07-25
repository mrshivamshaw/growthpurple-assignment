import { useState } from 'react'
import './App.css'
import TestChapter from './components/TestChapter/TestChapter'
import TestView from './components/TestView/TestView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] h-[100vh] bg-blue-50 flex justify-center items-center'> 
      {/* <TestChapter/> */}
      <TestView/>
    </div>
  )
}

export default App
