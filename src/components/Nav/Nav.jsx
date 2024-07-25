import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Nav = () => {
  return (
    <nav className='w-full flex justify-between items-center border border-gray-400 rounded-b-[35px] px-10 pb-4 pt-3'>
            <div className=''>
                <h1 className='text-lg font-semibold'>Reading and Writting Module 1</h1>
                <div className='flex justify-start items-center'>
                    <span className=''>Directions</span>
                    <span><MdKeyboardArrowDown/></span>
                </div>
            </div>

            <div className='flex flex-col justify-between items-center'>
                <span className='text-2xl font-semibold'>31:30</span>
                <span>
                    <button className='px-5 py-1 font-semibold rounded-3xl border-2 border-black'>Hide</button>
                </span>
            </div>
            <div>
            <button className='px-5 py-1 font-semibold rounded-3xl border-2 border-black'>Save & Exit</button>

            </div>
        </nav>
  )
}

export default Nav