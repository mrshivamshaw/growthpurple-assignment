import React from 'react'
import { useTest } from '../../Context/TestContext'
import { IoLocationSharp } from 'react-icons/io5'

const QuestionNumber = ({num}) => {
  const {currentQuestionIndex} = useTest();
  return (
    <div className='relative h-[25px] w-[25px] border-2 border-dotted border-black text-center flex justify-center items-center'>
      <span>{num+1}</span>
      {currentQuestionIndex == num ?<span className='absolute -top-[19px]'><IoLocationSharp/></span>:""}
    </div>

  )
}

export default QuestionNumber