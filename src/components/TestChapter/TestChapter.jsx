import React from 'react'
import TestCard from '../TestCard/TestCard'
import chapters from '../../data/chapters.json'

const TestChapter = () => {
  return (
    <div className='w-[100%] md:w-full lg:w-[85%] xl:w-[85%] h-auto flex flex-col justify-center items-start gap-6 mx-auto py-10'>
        <h1 className='text-3xl font-bold'>Math</h1>
        <div className='w-full h-auto flex flex-wrap gap-5 px-2 md:px-2 lg:px-0 xl:px-0'>
            {
                chapters.chapters.map((chapter, index) => {
                    return (
                        <TestCard
                            key={index}
                            name={chapter.name}
                            questions={chapter.questions}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default TestChapter