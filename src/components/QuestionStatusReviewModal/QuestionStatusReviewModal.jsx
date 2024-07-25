import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import { IoLocationSharp } from "react-icons/io5";
import { FcBookmark } from "react-icons/fc";
import QuestionNumber from '../QuestionNumber/QuestionNumber';



const QuestionStatusReviewModal = () => {
  return (
    <div className='absolute bottom-20 w-[550px] h-auto p-4 shadow-md border rounded-3xl bg-white flex flex-col justify-start items-start gap-2'>
        <div className='flex justify-between items-center w-full rounded-3xl'>
            <div></div>
            <h1 className='text-base font-bold'>Reading and Writting: Module 1</h1>
            <div className='text-2xl'>
                <LiaTimesSolid/>
            </div>
        </div>
        <div className='w-full flex justify-between items-center border-y-2 px-8 py-[6px]'>
            <div className='flex justify-start items-center'>
                <IoLocationSharp/>
                <div className='text-black/80'>Current</div>
            </div>
            <div className='flex justify-start items-center gap-1'>
                <div className='h-[25px] w-[25px] border-2 border-dotted border-black'></div>
                <div className='text-black/80'>Unanswered</div>
            </div>
            <div className='flex justify-start items-center'>
                <FcBookmark className='text-2xl'/>
                <div className='text-black/80'>For Review</div>
            </div>
        </div>
        <div className='w-full px-8 flex flex-wrap justify-center items-center gap-3 my-5'>
            <QuestionNumber/>
            <QuestionNumber/>
            <QuestionNumber/>
        </div>
        <div className='flex justify-center items-center w-full'>
            <button className='px-5 py-1 font-semibold rounded-3xl border-2 border-blue-700 text-blue-700'>Go to Review Page</button>
        </div>
    </div>
  )
}

export default QuestionStatusReviewModal