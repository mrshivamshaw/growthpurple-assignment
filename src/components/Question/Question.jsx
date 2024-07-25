import React from "react";
import chapters from "../../data/chapters.json";
import { CiBookmark } from "react-icons/ci";


const Question = () => {
  const question = chapters.chapters[0].questions[0];
  return (
    <div className="w-full mx-auto flex  justify-between items-start h-full  mt-12">
      <h1 className=" w-[50%] h-full pr-7 overflow-y-scroll">{question.context}</h1>
      <div className="w-[50%] border-l-[1px] border-slate-400 h-full pl-10 overflow-y-scroll">
        <div className="w-full flex justify-between items-center bg-slate-100 rounded-3xl pr-4">
            <div className="flex justify-center items-center gap-1">
                <div className="bg-black text-white rounded-b-3xl px-[17px] py-2 rounded-s-3xl font-semibold text-lg">1</div>
                <div className="flex justify-center items-center gap-1">
                    <CiBookmark className="text-xl font-extrabold"/>
                    <span>Mark for Review</span>
                </div>
            </div>
            <div className="py-1 px-4 border-2 text-xs border-black rounded-3xl font-bold bg-white">
                ABC
            </div>
        </div>
        <h2 className=" text-black/75 my-4">{question.question}</h2>
        <div className="w-full h-auto flex flex-col flex-wrap gap-5">
          {question?.options?.map((option, index) => {
            let value = option.slice(2,option.length-1)
            console.log(value);
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
