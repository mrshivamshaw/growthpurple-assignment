import React from 'react'
import Nav from '../Nav/Nav';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import Question from '../Question/Question';
import QuestionStatusReviewModal from '../QuestionStatusReviewModal/QuestionStatusReviewModal';
import { useTest } from '../../Context/TestContext';

const TestView = () => {
  const {modalActive} = useTest();
  return (
    
    <div className='w-[100vw] h-[100vh] bg-white relative flex flex-col items-center justify-center'>
        <div className='w-full md:w-full lg:w-[85%] xl:w-[85%] h-[90%] mx-auto flex flex-col justify-start items-start'>
            <Nav/>
            <Question/>
        </div>
        {modalActive && <QuestionStatusReviewModal/>}
        <BottomNavigation/>
    </div>
  )
}

export default TestView