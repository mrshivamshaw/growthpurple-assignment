import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";
import { useTest } from "../../Context/TestContext";


const Question = () => {
  const {questions, currentQuestionIndex,markQuestionAsReviewed,reviewedQuestions,setReviewedQuestions} = useTest();
  const question = questions[currentQuestionIndex];
  return (
    <div className="main-scroll w-full mx-auto flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-start h-full  mt-5 md:mt-5 lg:mt-12 xl:mt-12 px-4 md:px-4 lg:px-0 xl:px-0 gap-8 overflow-y-scroll pb-6 md:pb-6 lg:pb-0 xl:pb-0">
      <h1 className=" w-full md:w-full lg:w-[50%] xl:w-[50%] h-auto md:h-auto lg:h-full xl:h-full pr-0 md:pr-0 lg:pr-7 xl:pr-7">{question?.context}</h1>
      <div className="w-full md:w-full lg:w-[50%] xl:w-[50%] border-l-[0px] md:border-l-[0px] lg:border-l-[1px] xl:border-l-[1px] border-slate-400 h-full pl-0 md:pl-0 lg:pl-10 xl:pl-10">
        <div className="w-full flex justify-between items-center bg-slate-100 rounded-3xl pr-4">
            <div className="flex justify-center items-center gap-1">
                <div className="bg-black text-white rounded-b-3xl px-[17px] py-2 rounded-s-3xl font-semibold text-lg">{currentQuestionIndex+1}</div>
                {!reviewedQuestions.includes(currentQuestionIndex) ? <div onClick={markQuestionAsReviewed} className="cursor-pointer flex justify-center items-center gap-1">
                    <CiBookmark className="text-xl font-extrabold"/>
                    <span>Mark for Review</span>
                </div>:
                <div onClick={()=> setReviewedQuestions(reviewedQuestions.filter((question) => question !== currentQuestionIndex))} className="cursor-pointer flex justify-center items-center gap-1">
                    <FaBookmark className="text-xl font-extrabold"/>
                    <span>Remove from review</span>
                </div>
                }
            </div>
            <div className="py-1 px-4 border-2 text-xs border-black rounded-3xl font-bold bg-white">
                ABC
            </div>
        </div>
        <h2 className=" text-black/75 my-4">{question?.question}</h2>
        <div className="w-full h-auto flex flex-col flex-wrap gap-5">
          {question?.options?.map((option, index) => {
            let value = option.slice(2,option.length-1)
            // console.log(value);
            return (
            <button
              key={index}
              className="border-[1.6px] pr-4 pl-2 py-[8px] rounded-3xl text-start flex justify-start items-center gap-2"
            >
              <span className="font-semibold text-black/80 bg-slate-100 px-[8px] pb-[2.8px] rounded-full">{option[0]}</span>
              <span className="capitalize text-black/80">{value}</span>
            </button>
          )})}
        </div>
      </div>
    </div>
  );
};

export default Question;
