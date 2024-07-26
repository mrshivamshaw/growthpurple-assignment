import { useState } from 'react'
import './App.css'
import TestChapter from './components/TestChapter/TestChapter'
import TestView from './components/TestView/TestView'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] h-auto md:h-auto lg:h-[100vh] xl:h-[100vh] bg-blue-50 flex justify-center items-center'> 
      <Routes>
        <Route path='/' element={<TestChapter/>}/>
        <Route path='/testview' element={<TestView/>}/>
      </Routes>
    </div>
  )
}

export default App
