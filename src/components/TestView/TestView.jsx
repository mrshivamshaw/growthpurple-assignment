import React from 'react'
import Nav from '../Nav/Nav';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import Question from '../Question/Question';

const TestView = () => {
  return (
    
    <div className='w-[100vw] h-[100vh] bg-white'>
        <div className='w-[85%] h-[90%] mx-auto flex flex-col justify-start items-start'>
            <Nav/>
            <Question/>
        </div>
        <BottomNavigation/>
    </div>
  )
}

export default TestView